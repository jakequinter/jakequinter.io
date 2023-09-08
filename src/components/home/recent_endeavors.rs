use ::leptos::*;

#[derive(Clone, Debug)]
struct Project {
    name: String,
    logo: String,
    description: String,
    url: Option<String>,
    github_url: Option<String>,
}

#[component]
pub fn RecentEndeavors(cx: Scope) -> impl IntoView {
    let (projects, _) = create_signal(
        cx,
        vec![
            Project {
                name: String::from("jakequinter.io"),
                logo: String::from("/jake.svg"),
                description: String::from("hi desc"),
                url: None,
                github_url: None,
            },
            Project {
                name: String::from("Merryfield"),
                logo: String::from("/merryfield.svg"),
                description: String::from("hi desc"),
                url: Some(String::from("https://merryfield.com")),
                github_url: None,
            },
        ],
    );

    view! { cx,
        <section>
            <h2 class="text-xl font-semibold text-gray-900">Recent Endeavors</h2>

            <div class="my-4 flex gap-2">
                <For
                    each=move || projects.get()
                    key=|project| project.name.clone()
                    view=move |cx, project| {
                        view! {
                            cx,
                            <button>
                                <img src=project.logo alt=project.name width=32 height=32 />
                            </button>
                        }
                    }
                />
            </div>

            <div class="space-y-8 rounded-t-3xl border-l border-r border-t border-gray-200 bg-gradient-to-b from-white to-gray-100 px-8 pt-8">
            </div>
        </section>
    }
}
