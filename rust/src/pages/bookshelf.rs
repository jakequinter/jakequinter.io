use std::collections::HashMap;

use leptos::*;
use reqwest;
use rss::Channel;
use serde::{Deserialize, Serialize};

use crate::components::bookshelf::{pagination::Pagination, tabs::Tabs};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Book {
    creators: Vec<String>,
    guid: String,
    link: String,
    title: String,
}

#[server(Oku, "/api")]
pub async fn get_oku_content() -> Result<HashMap<String, Vec<Book>>, ServerFnError> {
    let urls: HashMap<&str, &str> = [
        ("Reading", "https://oku.club/rss/collection/LpZv9"),
        ("To Read", "https://oku.club/rss/collection/2nMmG"),
        ("Finished", "https://oku.club/rss/collection/46HZV"),
    ]
    .iter()
    .cloned()
    .collect();

    let mut oku_content = HashMap::new();

    for (name, url) in urls {
        let resp = match reqwest::get(url).await {
            Ok(response) => response.bytes().await?,
            Err(e) => return Err(ServerFnError::from(e)),
        };
        let channel = Channel::read_from(&resp[..])?;

        let mut books = Vec::new();
        for item in channel.items() {
            let book = Book {
                creators: item.dublin_core_ext.clone().unwrap().creators,
                guid: item.guid.clone().unwrap().value,
                link: item.link.clone().unwrap(),
                title: item.title.clone().unwrap(),
            };
            books.push(book);
        }
        oku_content.insert(String::from(name), books);
    }

    let ocaml = Book {
        creators: vec![String::from("Michael R. Clarkson et al.")],
        guid: String::from("ocaml"),
        link: String::from("https://cs3110.github.io/textbook/cover.html"),
        title: String::from("OCaml Programming: Correct + Efficient + Beautiful"),
    };

    oku_content
        .entry(String::from("Reading"))
        .or_insert(vec![ocaml.clone()])
        .push(ocaml);

    Ok(oku_content)
}

#[component]
pub fn BookshelfPage(cx: Scope) -> impl IntoView {
    let (active_tab, set_active_tab) = create_signal(cx, String::from("Reading"));
    let (page, set_page) = create_signal(cx, 0);
    let (total_pages, set_total_pages) = create_signal(cx, 0);
    let oku = create_resource(cx, || (), |_| async { get_oku_content().await });
    let books_per_page = 10;

    view! { cx,
        <div>
            <h1 class="text-center mb-16 text-4xl font-bold text-gray-900">Bookshelf</h1>
            <p class="mb-16">
                "This is my internet library where I keep track of my favorite books.
                Books that I'm currently reading, have already finished, or plan to
                pick up in the future. This list is nowhere near exhaustive, and is
                currently displaying books I've found or read since 2021."
            </p>

            <Tabs active_tab=active_tab set_active_tab=set_active_tab set_page=set_page/>

            <Transition fallback=move || {
                view! { cx, <div>Loading...</div> }
            }>
                {move || {
                    let tab_books = {
                        move || {
                            oku.read(cx)
                                .map(move |oku| match oku {
                                    Err(e) => {
                                        view! { cx,
                                            <pre class="error">"Server Error: " {e.to_string()}</pre>
                                        }
                                            .into_view(cx)
                                    }
                                    Ok(oku_content) => {
                                        let active_books = oku_content.get(&*active_tab.get());
                                        if let Some(books) = active_books {
                                            if books.is_empty() {

                                                view! { cx, <p>"No tasks were found."</p> }
                                                    .into_view(cx)
                                            } else {
                                                let start = books_per_page * page.get();
                                                let end = std::cmp::min(
                                                    start + books_per_page,
                                                    books.len(),
                                                );
                                                set_total_pages(
                                                    (books.len() as f32 / books_per_page as f32 - 1.0).ceil()
                                                        as usize,
                                                );
                                                let page_books = &books[start as usize..end as usize];
                                                page_books
                                                    .iter()
                                                    .map(move |book| {

                                                        view! { cx,
                                                            <li>
                                                                <a href=&book.link>
                                                                    <div class="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer">
                                                                        <div class="flex flex-col justify-between truncate pr-8">
                                                                            <p class="truncate font-medium text-gray-900">
                                                                                {&book.title}
                                                                            </p>

                                                                            <p class="pt-4 text-sm font-light text-gray-500">
                                                                                {&book.creators[0]}
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="#78716c"
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
                                        } else {

                                            view! { cx, <p>"No tasks were found."</p> }
                                                .into_view(cx)
                                        }
                                    }
                                })
                                .unwrap_or_default()
                        }
                    };

                    view! { cx,
                        <ul class="space-y-4">{tab_books}</ul>
                        <Pagination page=page set_page=set_page total_pages=total_pages/>
                    }
                }}

            </Transition>
        </div>
    }
}
