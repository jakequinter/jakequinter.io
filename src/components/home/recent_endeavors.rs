use ::leptos::*;

#[derive(Clone, Debug)]
struct Project {
    name: RwSignal<String>,
    logo: RwSignal<String>,
    description: RwSignal<String>,
    url: RwSignal<Option<String>>,
    github_url: RwSignal<Option<String>>,
}

#[component]
pub fn RecentEndeavors(cx: Scope) -> impl IntoView {
    let (projects, _) = create_signal(
        cx,
        vec![
            Project {
                name: create_rw_signal(cx, String::from("jakequinter.io")),
                logo: create_rw_signal(cx, String::from("/jake.svg")),
                description: create_rw_signal(cx, String::from("My home on the internet. Here, I experiment with new technologies I am interested in trying. I recently migrated this site to Next.js 13 using their new app directory and React Server Components.")),
                url: create_rw_signal(cx, None),
                github_url: create_rw_signal(cx, Some(String::from("https://github.com/jakequinter/jakequinter.io"))),
            },
            Project {
                name: create_rw_signal(cx, String::from("Merryfield")),
                logo: create_rw_signal(cx, String::from("/merryfield.svg")),
                description: create_rw_signal(cx, String::from("This is where I work and where I am responsible for all Merryfield web applications. Recently, I rewrote our marketing website in Next.js and TypeScript. Currently, we are in the process of creating two new web applications and busy launching Learn & Earn.")),
                url: create_rw_signal(cx, Some(String::from("https://merryfield.com"))),
                github_url: create_rw_signal(cx, None),
            },
        ],
    );
    let (selected_project, set_selected_project) =
        create_signal(cx, projects.get_untracked()[0].clone());

    view! { cx,
        <section>
            <h2 class="text-xl font-semibold text-gray-900">Recent Endeavors</h2>

            <div class="my-4 flex gap-2">
                <For
                    each=move || projects.get()
                    key=|project| project.name.get()
                    view=move |cx, project| {
                        let cloned_project = project.clone();
                        let handle_change = move |cloned_project: Project| {
                            set_selected_project(cloned_project);
                        };

                        view! { cx,
                            <button on:click=move |_| handle_change(cloned_project.clone())>
                                <img
                                    src=project.logo.get()
                                    alt=project.name.get()
                                    width=64
                                    height=64
                                />
                            </button>
                        }
                    }
                />

            </div>

            <div class="space-y-8 rounded-t-3xl border-l border-r border-t border-gray-200 bg-gradient-to-b from-white to-gray-100 px-8 pt-8">
                <h3 class="text-center text-lg font-semibold">
                    {move || selected_project.get().name.get()}
                </h3>
                <p>{move || selected_project.get().description.get()}</p>

                <div class="flex space-x-4">
                    <Show
                        when=move || { selected_project.get().url.get().is_some() }
                        fallback=|_| view! { cx, <></> }
                    >
                        <a class="w-full" href=selected_project.get().url.get()>
                            <button class="inline-flex w-full items-center justify-center rounded-lg bg-black py-2 px-4 text-white">
                                Visit <img class="ml-2" src="/icons/arrow-right.svg" height=16 width=16 />
                            </button>
                        </a>
                    </Show>
                    <Show
                        when=move || { selected_project.get().github_url.get().is_some() }
                        fallback=|_| view! { cx, <></> }
                    >
                        <a class="w-full" href=selected_project.get().github_url.get()>
                            <button class="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 py-2 px-4 text-white">
                                View source <img class="ml-2" src="/icons/github-logo.svg" height=16 width=16 />
                            </button>
                        </a>
                    </Show>
                </div>
            </div>
        </section>
    }
}
