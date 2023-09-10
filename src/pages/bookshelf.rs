use leptos::*;
use reqwest;
use rss::Channel;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Book {
    creators: Vec<String>,
    guid: String,
    link: String,
    title: String,
}

#[server(Books, "/api")]
pub async fn get_read() -> Result<Vec<Book>, ServerFnError> {
    let response = reqwest::get("https://oku.club/rss/collection/LpZv9")
        .await?
        .bytes()
        .await?;
    let channel = Channel::read_from(&response[..]).unwrap();
    let items = channel.items();

    let mut books = Vec::new();
    for item in channel.items {
        let book = Book {
            creators: item.dublin_core_ext.unwrap().creators,
            guid: item.guid.unwrap().value,
            link: item.link.unwrap(),
            title: item.title.unwrap(),
        };
        books.push(book);
    }

    Ok(books)
}

#[component]
pub fn BookshelfPage(cx: Scope) -> impl IntoView {
    let books = create_resource(cx, || (), |_| async { get_read().await });

    view! { cx,
        <div class="space-y-16">
            <h1 class="text-center text-4xl font-bold text-gray-900">Bookshelf</h1>
            <p>
                "This is my internet library where I keep track of my favorite books.
                Books that I'm currently reading, have already finished, or plan to
                pick up in the future. This list is nowhere near exhaustive, and is
                currently displaying books I've found or read since 2021."
            </p>

            <Transition fallback=move || {
                view! { cx, <p>"Loading..."</p> }
            }>
                {move || {
                    let read_books = {
                        move || {
                            books
                                .read(cx)
                                .map(move |books| match books {
                                    Err(e) => {
                                        view! { cx,
                                            <pre class="error">"Server Error: " {e.to_string()}</pre>
                                        }
                                            .into_view(cx)
                                    }
                                    Ok(books) => {
                                        if books.is_empty() {

                                            view! { cx, <p>"No tasks were found."</p> }
                                                .into_view(cx)
                                        } else {
                                            books
                                                .into_iter()
                                                .map(move |book| {

                                                    view! { cx,
                                                        <li>
                                                            <a href=book.link>
                                                                <div class="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer">
                                                                    <div class="flex flex-col justify-between truncate pr-8">
                                                                        <p class="truncate font-medium text-gray-900">
                                                                            {book.title}
                                                                        </p>

                                                                        <p class="pt-4 text-sm font-light text-gray-500">
                                                                            {book.creators}
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="16"
                                                                            height="16"
                                                                            fill="#000"
                                                                            viewBox="0 0 256 256"
                                                                        >
                                                                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    }
                                                })
                                                .collect_view(cx)
                                        }
                                    }
                                })
                                .unwrap_or_default()
                        }
                    };

                    view! { cx, <ul class="space-y-4">{read_books}</ul> }
                }}

            </Transition>
        </div>
    }
}
