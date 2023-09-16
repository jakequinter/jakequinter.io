use leptos::*;
use serde::{Deserialize, Serialize};
// use sqlx::Row;

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct FoodItem {
    id: String,
}

#[server(Food, "/api")]
pub async fn get_food() -> Result<Vec<Food>, ServerFnError> {
    // let rows = sqlx::query("SELECT * FROM food")
    //     .fetch_all(&pool)
    //     .await
    //     .expect("Could not execute query");
    //
    // for row in rows {
    //     let name: String = row.get("restaurant_name");
    //
    //     println!("name: {}", name);
    // }
    todo!()
}

#[component]
pub fn FoodPage(cx: Scope) -> impl IntoView {
    view! { cx,
        <div class="space-y-16">
            <h1 class="text-4xl text-center font-bold text-gray-900">"Food 🍕"</h1>

            <section class="space-y-4">
                <p>
                    "Although I try to eat healthy ~95% of the time, my girlfriend and I love food. We love trying new restaurants, cuisines, keeping track of what we loved, what we liked, and what we didn't care for. Since moving to Boston, we have been introduced to a new realm of restaurants. It's quite different than what we were accustomed to in Appleton, WI. There's food everywhere here. So, we thought it would be cool to keep track of the food we've tried, give it a rating, and remember it for future reference."
                </p>
            </section>
        </div>
    }
}
