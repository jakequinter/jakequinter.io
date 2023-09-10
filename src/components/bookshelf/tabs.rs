use leptos::*;

#[derive(Clone)]
struct Tab {
    name: RwSignal<String>,
}

#[component]
pub fn Tabs(cx: Scope) -> impl IntoView {
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
    let (active_tab, set_active_tab) = create_signal(cx, tabs.get_untracked()[0].clone());

    view! { cx,
        <div class="my-12 flex justify-center">
            <div class="z-0 rounded-2xl border border-gray-300 bg-white p-1.5 shadow-md">
                <nav class="flex space-x-2" aria-label="Tabs">
                    <For
                        each=move || tabs.get()
                        key=|tab| tab.name.get()
                        view=move |cx, tab| {
                            let cloned_tab = tab.clone();
                            let handle_change = move |cloned_tab: Tab| {
                                set_active_tab(cloned_tab);
                            };

                            view! { cx,
                                <button
                                    class="flex cursor-pointer px-3 py-1"
                                    class=(
                                        "activeTab",
                                        move || active_tab.get().name.get() == tab.name.get(),
                                    )
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
