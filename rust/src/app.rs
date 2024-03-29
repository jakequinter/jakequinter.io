use crate::error_template::{AppError, ErrorTemplate};
use leptos::*;
use leptos_meta::*;
use leptos_router::*;

use crate::components::shared::{footer::Footer, nav::Nav};
use crate::pages::{bookshelf::BookshelfPage, food::FoodPage, homepage::HomePage};

#[component]
pub fn App(cx: Scope) -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context(cx);

    view! { cx,
        // injects a stylesheet into the document <head>
        // id=leptos means cargo-leptos will hot-reload this stylesheet
        <Link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Link rel="preconnect" href="https://fonts.gstatic.com"/>
        <Stylesheet href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"/>
        <Stylesheet id="leptos" href="/pkg/jakequinter_io.css"/>

        // sets the document title
        <Title text="Jake Quinter"/>

        // content for this welcome page
        <Router fallback=|cx| {
            let mut outside_errors = Errors::default();
            outside_errors.insert_with_default_key(AppError::NotFound);
            view! { cx, <ErrorTemplate outside_errors/> }.into_view(cx)
        }>
            <Nav/>

            <main
                class="mb-20 mx-auto mt-40 max-w-screen-sm px-4 sm:px-0"
                style="min-height: calc(100vh - 289px)"
            >
                <Routes>
                    <Route path="" view=|cx| view! { cx, <HomePage/> }/>
                    <Route path="bookshelf" view=BookshelfPage ssr=SsrMode::Async/>
                    <Route path="food" view=FoodPage ssr=SsrMode::Async/>
                </Routes>

            </main>

            <Footer/>
        </Router>
    }
}
