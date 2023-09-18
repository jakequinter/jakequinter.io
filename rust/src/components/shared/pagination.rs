use leptos::*;

fn handle_results(page: ReadSignal<usize>, total_items: ReadSignal<usize>) -> String {
    let items_per_page = 10;

    let start = page.get() * items_per_page + 1;
    let end = std::cmp::min((page.get() + 1) * items_per_page, total_items.get());

    format!("{} – {} of {} results", start, end, total_items.get())
}

#[component]
pub fn Pagination(
    cx: Scope,
    total_pages: ReadSignal<usize>,
    page: ReadSignal<usize>,
    set_page: WriteSignal<usize>,
    total_items: ReadSignal<usize>,
) -> impl IntoView {
    let pagination_view = move || {
        if total_pages.get() == 0 {
            view! { cx, <div></div> }
        } else {
            view! { cx,
                <div class="mt-4 flex items-center justify-between text-sm">
                    <p>{handle_results(page, total_items)}</p>
                    <div class="space-x-4 flex items-start justify-end">
                        <button
                            class="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-3 py-1.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                            on:click=move |_| set_page(page.get() - 1)
                            disabled=move || page.get() == 0
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="16"
                                height="16"
                            >
                                <rect width="256" height="256" fill="none"></rect>
                                <line
                                    x1="216"
                                    y1="128"
                                    x2="40"
                                    y2="128"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></line>
                                <polyline
                                    points="112 56 40 128 112 200"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></polyline>
                            </svg>
                            "Previous"
                        </button>
                        <button
                            class="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-3 py-1.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                            on:click=move |_| set_page(page.get() + 1)
                            disabled=move || page.get() == total_pages.get()
                        >
                            "Next"

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="16"
                                height="16"
                            >
                                <rect width="256" height="256" fill="none"></rect>
                                <line
                                    x1="40"
                                    y1="128"
                                    x2="216"
                                    y2="128"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></line>
                                <polyline
                                    points="144 56 216 128 144 200"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="16"
                                ></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            }
        }
    };

    view! { cx, {pagination_view} }
}
