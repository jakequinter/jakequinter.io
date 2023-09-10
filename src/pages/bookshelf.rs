use leptos::*;
use reqwest;
use rss::Channel;
use serde::{Deserialize, Serialize};
use std::fmt;

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Book {
    // creators: String,
    guid: String,
    link: String,
    title: String,
}

impl fmt::Display for Book {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.title)
    }
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
                                                .map(move |todo| {

                                                    view! { cx, <li>{todo.title}</li> }
                                                })
                                                .collect_view(cx)
                                        }
                                    }
                                })
                                .unwrap_or_default()
                        }
                    };

                    view! { cx, <ul>{read_books}</ul> }
                }}
            </Transition>
        </div>
    }
}
