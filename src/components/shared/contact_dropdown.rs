use leptos::*;

#[component]
pub fn ContactDropdown(cx: Scope) -> impl IntoView {
    view! { cx,
        <button class="inline-flex items-center gap-2 rounded-[10px] bg-white py-2.5 px-4 font-medium text-black hover:bg-gray-100">
            "Contact"
            <img
                class="transition duration-150 ease-in-out"
                src="/caret-down.svg"
                alt="Jake"
                height=14
                width=14
            />
        </button>
    }
}
