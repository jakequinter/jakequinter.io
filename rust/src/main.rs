use cfg_if::cfg_if;

cfg_if! {
    if #[cfg(feature = "ssr")] {
        use axum::{routing::post, Router};
        use dotenv::dotenv;
        use jakequinter_io::app::*;
        use jakequinter_io::fileserv::file_and_error_handler;
        use leptos::*;
        use leptos_axum::{generate_route_list, LeptosRoutes};
        use sqlx::mysql::{MySqlPool, MySqlPoolOptions};
        use sqlx::Row;

        use axum::extract::FromRef;
        use leptos_router::RouteListing;
        use leptos::LeptosOptions;

        #[derive(FromRef, Debug, Clone)]
        pub struct AppState{
            pub leptos_options: LeptosOptions,
            pub pool: MySqlPool,
            pub routes: Vec<RouteListing>,
        }

        #[tokio::main]
        async fn main() {
            dotenv().ok();

            simple_logger::init_with_level(log::Level::Debug).expect("couldn't initialize logging");

            let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set.");
            let pool = MySqlPoolOptions::new()
                .max_connections(5)
                .connect(&database_url)
                    .await.expect("could not make a connection pooler",);

            // Setting get_configuration(None) means we'll be using cargo-leptos's env values
            // For deployment these variables are:
            // <https://github.com/leptos-rs/start-axum#executing-a-server-on-a-remote-machine-without-the-toolchain>
            // Alternately a file can be specified such as Some("Cargo.toml")
            // The file would need to be included with the executable when moved to deployment
            let conf = get_configuration(None).await.unwrap();
            let leptos_options = conf.leptos_options;
            let addr = leptos_options.site_addr;
            let routes = generate_route_list(|cx| view! { cx, <App/> }).await;

            // let app_state = AppState {
            //     leptos_options,
            //     pool: pool.clone(),
            //     routes: routes.clone(),
            // };

            // build our application with a route
            let app = Router::new()
                .route("/api/*fn_name", post(leptos_axum::handle_server_fns))
                .leptos_routes(&leptos_options, routes, |cx| view! { cx, <App/> })
                .fallback(file_and_error_handler)
                .with_state(leptos_options);

            // run our app with hyper
            // `axum::Server` is a re-export of `hyper::Server`
            log!("listening on http://{}", &addr);
            axum::Server::bind(&addr)
                .serve(app.into_make_service())
                .await
                .unwrap();
        }
    } else {
         pub fn main() {
            // This example cannot be built as a trunk standalone CSR-only app.
            // Only the server may directly connect to the database.
        }
    }
}
