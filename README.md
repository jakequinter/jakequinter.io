# [jakequinter.io](https://jakequinter.io/)

This is my personal site, which is just a small location to display some of the projects I'm working on, have employers easily access my resume, and keep bookmarks for all things I want to remember for later. It is currently in the second iteration, so it is relatively new, but I tend to keep this site up-to-date and update it as often as possible. Recently, I incorporated the API and `/Bookmarks` page to keep track of all things I find exceptional on the internet.

### Overview

- `pages/api/things/*`: API routes for retrieving the 'internet things' destinations on the `/bookmarks` page.
- `pages/bookmarks`: Retrieves information from `pages/api/things/*` to display the content on the internet I find most fascinating.
- `pages/things`: This is an authenticated route which displays a form to push new 'internet things' onto the API.
- `pages/*`: All other pages are static pages.

### Running Locally

```
$ git clone https://github.com/jakequinter/jakequinter.io.git
$ cd jakequinter.io
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to what is posted below:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

### Built With

- [Vercel](https://vercel.com/)
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Chakra UI](https://chakra-ui.com/)
