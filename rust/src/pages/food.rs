use crate::components::bookshelf::pagination::Pagination;
use cfg_if::cfg_if;
use leptos::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct FoodItem {
    id: String,
    image: String,
    jake_rating: f32,
    jen_rating: f32,
    link: String,
    restaurant_name: String,
}

cfg_if! {
    if #[cfg(feature = "ssr")] {

        use sqlx::mysql::MySqlPool;


        pub fn pool(cx: Scope) -> Result<MySqlPool, ServerFnError> {
            use_context::<MySqlPool>(cx)
                .ok_or_else(|| ServerFnError::ServerError("Pool missing.".into()))
        }

        #[derive(sqlx::FromRow, Clone)]
        pub struct SqlFoodItem {
            id: String,
            image: String,
            jake_rating: f32,
            jen_rating: f32,
            link: String,
            restaurant_name: String,
        }

        impl SqlFoodItem {
            pub async fn into_todo(self) -> FoodItem {
                FoodItem {
                    id: self.id,
                    image: self.image,
                    jake_rating: self.jake_rating,
                    jen_rating: self.jen_rating,
                    link: self.link,
                    restaurant_name: self.restaurant_name,
                }
            }
        }
    }
}

#[server(GetFood, "/api")]
pub async fn get_food(cx: Scope) -> Result<Vec<FoodItem>, ServerFnError> {
    use futures::TryStreamExt;

    let pool = pool(cx)?;

    let mut food = Vec::new();
    let mut rows = sqlx::query_as::<_, SqlFoodItem>("SELECT * FROM food ORDER BY created_at DESC")
        .fetch(&pool);

    while let Some(row) = rows.try_next().await? {
        food.push(row);
    }

    let mut converted_food = Vec::with_capacity(food.len());

    for f in food {
        let food_item = f.into_todo().await;
        converted_food.push(food_item);
    }

    let food: Vec<FoodItem> = converted_food;

    Ok(food)
}

#[component]
pub fn FoodPage(cx: Scope) -> impl IntoView {
    let food = create_resource(cx, || (), move |_| get_food(cx));
    let (page, set_page) = create_signal(cx, 0);
    let (total_pages, set_total_pages) = create_signal(cx, 0);
    let food_per_page = 10;

    view! { cx,
        <div>
            <h1 class="mb-16 text-4xl text-center font-bold text-gray-900">"Food 🍕"</h1>

            <section class="space-y-4">
                <p class="mb-16">
                    "Although I try to eat healthy ~95% of the time, my girlfriend and I love food. We love trying new restaurants, cuisines, keeping track of what we loved, what we liked, and what we didn't care for. Since moving to Boston, we have been introduced to a new realm of restaurants. It's quite different than what we were accustomed to in Appleton, WI. There's food everywhere here. So, we thought it would be cool to keep track of the food we've tried, give it a rating, and remember it for future reference."
                </p>
            </section>

            <Transition fallback=move || {
                view! { cx, <div>Loading...</div> }
            }>
                {move || {
                    let food_view = {
                        move || {
                            food.read(cx)
                                .map(move |item| match item {
                                    Err(e) => {

                                        view! { cx,
                                            <pre class="error">"Server Error: " {e.to_string()}</pre>
                                        }
                                            .into_view(cx)
                                    }
                                    Ok(food) => {
                                        if food.is_empty() {

                                            view! { cx, <p>"No tasks were found."</p> }
                                                .into_view(cx)
                                        } else {

                                                let start = food_per_page * page.get();
                                                let end = std::cmp::min(
                                                    start + food_per_page,
                                                    food.len(),
                                                );
                                                set_total_pages(
                                                    (food.len() as f32 / food_per_page as f32 - 1.0).ceil()
                                                        as usize,
                                                );
                                                let food_page = &food[start as usize..end as usize];
                                            food_page.iter()
                                                .map(move |item| {

                                                    view! { cx,
                                                        <div class="group relative rounded-lg shadow grayscale hover:cursor-pointer hover:grayscale-0">
                                                            <a href="">
                                                                <img
                                                                    class="rounded-lg object-cover shadow-lg brightness-50"
                                                                    src=&item.image
                                                                    alt=&item.restaurant_name
                                                                    width=640
                                                                    height=((3f32 / 4f32) * 640f32).floor()
                                                                />

                                                                <div>
                                                                    <h2 class="absolute top-8 left-1/2 -translate-x-1/2 text-center text-xl font-medium text-white">
                                                                        {&item.restaurant_name}
                                                                    </h2>

                                                                    // <ArrowSquareOut
                                                                    // class="absolute top-2 right-2 hidden text-gray-100 group-hover:block"
                                                                    // size="20"
                                                                    // />

                                                                    <div class="absolute top-1/4 left-6 -translate-y-1/4">
                                                                        <div class="flex items-center text-gray-300">
                                                                            <img
                                                                                height=35
                                                                                width=35
                                                                                src="/jakeAvi.png"
                                                                                alt="Jake avatar"
                                                                            />
                                                                            <p class="ml-2">{format!("{}", & item.jake_rating)}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="absolute top-1/4 right-6 -translate-y-1/4">
                                                                        <div class="flex items-center text-gray-300">
                                                                            <img height=35 width=35 src="/jenAvi.png" alt="Jen avatar"/>
                                                                            <p class="ml-2">{format!("{}", & item.jen_rating)}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    }
                                                })
                                                .collect_view(cx)
                                        }
                                    }
                                })
                                .unwrap_or_default()
                        }
                    };

                    view! { cx,
                        <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">{food_view}</div>
                        <Pagination page=page set_page=set_page total_pages=total_pages/>
                    }
                }}

            </Transition>
        </div>
    }
}
