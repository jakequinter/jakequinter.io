use leptos::*;

use super::contact_dropdown::ContactDropdown;

#[component]
pub fn Nav(cx: Scope) -> impl IntoView {
    view! { cx,
        <nav class="fixed top-4 left-2 right-2 z-10 mx-auto max-w-sm rounded-2xl bg-black/80 p-1.5 text-sm backdrop-blur-sm">
            <ul class="flex items-center justify-between">
                <li>
                    <a href="/">
                        <img class="rounded-[10px]" src="/jake.png" alt="Jake" width=34 height=34/>
                    </a>
                </li>
                <li class="text-gray-50 hover:text-gray-300">
                    <a href="/bookshelf">"Bookshelf"</a>
                </li>
                <li class="text-gray-50 hover:text-gray-300">
                    <a href="/food">"Food"</a>
                </li>
                <li class="text-gray-50 hover:text-gray-300">
                    <a href="/blog">"Blog"</a>
                </li>
                <li>
                    <ContactDropdown/>
                </li>
            </ul>
        </nav>
    }
}
