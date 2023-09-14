use leptos::*;

#[derive(Clone)]
struct Tab {
    name: RwSignal<String>,
}

#[component]
pub fn Tabs(
    cx: Scope,
    active_tab: ReadSignal<String>,
    set_active_tab: WriteSignal<String>,
    set_page: WriteSignal<usize>,
) -> impl IntoView {
    let (tabs, _) = create_signal(
        cx,
        vec![
            Tab {
                name: create_rw_signal(cx, String::from("Reading")),
            },
            Tab {
                name: create_rw_signal(cx, String::from("To Read")),
            },
            Tab {
                name: create_rw_signal(cx, String::from("Finished")),
            },
        ],
    );

    view! { cx,
        <div class="my-12 flex justify-center">
            <div class="rounded-2xl border border-gray-300 bg-white p-1.5 shadow-md">
                <nav class="flex space-x-2" aria-label="Tabs">
                    <For
                        each=move || tabs.get()
                        key=|tab| tab.name.get()
                        view=move |cx, tab| {
                            let cloned_tab = tab.clone();
                            let handle_change = move |cloned_tab: Tab| {
                                set_page(0);
                                set_active_tab(cloned_tab.name.get());
                            };

                            view! { cx,
                                <button
                                    class="flex cursor-pointer px-3 py-1"
                                    class=("activeTab", move || active_tab.get() == tab.name.get())

                                    on:click=move |_| handle_change(cloned_tab.clone())
                                >
                                    {move || tab.name.get()}
                                </button>
                            }
                        }
                    />

                </nav>
            </div>
        </div>
    }
}
