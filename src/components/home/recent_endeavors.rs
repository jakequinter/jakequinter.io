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
            Project {
                name: create_rw_signal(cx, String::from("CloudinaryUploader")),
                logo: create_rw_signal(cx, String::from("/cloudinary.svg")),
                description: create_rw_signal(cx, String::from("A SwiftUI iOS application for uploading images to Cloudinary and creating a new row in my food table. This little app makes it easy to quickly snap a photo at the restaurant, add the desired fields, and upload straight to this website.")),
                url: create_rw_signal(cx, None),
                github_url: create_rw_signal(cx, Some(String::from("https://github.com/jakequinter/CloudinaryUpload"))),
            },
            Project {
                name: create_rw_signal(cx, String::from("Bison Drywall")),
                logo: create_rw_signal(cx, String::from("/bison.svg")),
                description: create_rw_signal(cx, String::from("A website I built for a friend who started his own drywall business. The most enjoyable part was creating the photos marquee section, which sources photos from his Facebook account through the Facebook Graph API. Up next, I'm going to rewrite this in OCaml/Reason ML.")),
                url: create_rw_signal(cx, Some(String::from("https://bisondrywall.io"))),
                github_url: create_rw_signal(cx, Some(String::from("https://github.com/jakequinter/bisondrywall.io"))),
            }
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
                                <span class="mr-2">Visit</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#fff"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                </svg>
                            </button>
                        </a>
                    </Show>
                    <Show
                        when=move || { selected_project.get().github_url.get().is_some() }
                        fallback=|_| view! { cx, <></> }
                    >
                        <a class="w-full" href=selected_project.get().github_url.get()>
                            <button class="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 py-2 px-4 text-white">
                                <span class="mr-2">View source</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#fff"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                                </svg>
                            </button>
                        </a>
                    </Show>
                </div>
            </div>
        </section>
    }
}
