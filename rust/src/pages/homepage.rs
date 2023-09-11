use leptos::*;

use crate::components::home::recent_endeavors::RecentEndeavors;

#[component]
pub fn HomePage(cx: Scope) -> impl IntoView {
    view! { cx,
        <div class="space-y-16">
            <div class="flex flex-col items-center space-y-2">
                <h1 class="text-4xl font-bold text-gray-900">Jake Quinter</h1>
                <h2 class="text-xl font-medium">Software Engineer</h2>
            </div>

            <section class="space-y-4">
                <p>
                    "Hi, I'm Jake. I'm a software engineer based in Boston, MA
                    where I'm currently helping ease decision-making fatigue when
                    choosing better-for-you products at "
                    <a class="text-blue-500 hover:text-blue-600" href="https://www.merryfield.com">
                        "Merryfield"
                    </a> "."
                </p>

                <p>
                    Building towards a future where the worlds of engineering and design
                    unify to craft magical software experiences.
                </p>
            </section>

            <RecentEndeavors/>
        </div>
    }
}
