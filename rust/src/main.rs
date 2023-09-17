use cfg_if::cfg_if;

cfg_if! {
    if #[cfg(feature = "ssr")] {
        use axum::{
            body::Body as AxumBody,
            extract::{FromRef, Path, State, RawQuery},
            http::{Request, header::HeaderMap},
            response::{Response, IntoResponse},
            routing::get,
            Router,
        };
        use dotenv::dotenv;
        use jakequinter_io::app::*;
        use jakequinter_io::fileserv::file_and_error_handler;
        use leptos_axum::{generate_route_list, LeptosRoutes, handle_server_fns_with_context};
        use leptos::{log, view, provide_context, get_configuration};
        use sqlx::mysql::{MySqlPool, MySqlPoolOptions};

        use leptos_router::RouteListing;
        use leptos::LeptosOptions;

        #[derive(FromRef, Debug, Clone)]
        pub struct AppState{
            pub leptos_options: LeptosOptions,
            pub pool: MySqlPool,
            pub routes: Vec<RouteListing>,
        }

         async fn server_fn_handler(State(app_state): State<AppState>, path: Path<String>, headers: HeaderMap, raw_query: RawQuery,
            request: Request<AxumBody>) -> impl IntoResponse {

                log!("{:?}", path);

                handle_server_fns_with_context(path, headers, raw_query, move |cx| {
                    provide_context(cx, app_state.pool.clone());
                }, request).await
            }

            async fn leptos_routes_handler(State(app_state): State<AppState>, req: Request<AxumBody>) -> Response{
                    let handler = leptos_axum::render_app_to_stream_with_context(app_state.leptos_options.clone(),
                    move |cx| {
                        provide_context(cx, app_state.pool.clone());
                    },
                    |cx| view! { cx, <App /> }
                );
                handler(req).await.into_response()
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

            let app_state = AppState {
                leptos_options,
                pool: pool.clone(),
                routes: routes.clone(),
            };

            // build our application with a route
            let app = Router::new()
                // .route("/api/*fn_name", post(leptos_axum::handle_server_fns))
                .route("/api/*fn_name", get(server_fn_handler).post(server_fn_handler))
                // .leptos_routes(&leptos_options, routes, |cx| view! { cx, <App/> })
                .leptos_routes_with_handler(routes, get(leptos_routes_handler) )
                .fallback(file_and_error_handler)
                .with_state(app_state);

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
