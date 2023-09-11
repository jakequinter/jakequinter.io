use chrono::Utc;
use chrono_tz::America::New_York;
use std::time::Duration;

use leptos::*;

#[component]
pub fn Footer(cx: Scope) -> impl IntoView {
    let (current_time, set_current_time) = create_signal(cx, String::from("00:00:00"));
    let (meridiem, set_meridiem) = create_signal(cx, String::from("--"));

    create_effect(cx, move |_| {
        set_interval(
            move || {
                let now = Utc::now();
                let eastern = now.with_timezone(&New_York);
                set_meridiem(eastern.format("%p").to_string());
                set_current_time(eastern.format("%I:%M:%S").to_string());
            },
            Duration::from_secs(1),
        );
    });

    view! { cx,
        <footer class="border-gray-220 border-t px-4">
            <div class="flex items-center justify-between py-4 text-xs text-gray-500">
                <a href="https://bitcoin.org/bitcoin.pdf" class="hover:text-gray-600">
                    "∞ / 21M"
                </a>
                <div class="flex items-center gap-0.5">
                    <p class="w-[6.5375rem]">
                        <span class="mr-0.5">"Boston ·"</span>
                        {current_time}
                    </p>
                    <p>{meridiem}</p>
                </div>
            </div>
        </footer>
    }
}
