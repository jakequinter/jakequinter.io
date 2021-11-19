# [jakequinter.io](https://jakequinter.io/)

My personal site changes often. I find it a space where I can implement new technologies I find interesting. I have transformed it to add a timeline of life events, currently at `'/about`, my `/bookmarks` for things I want to remember for later, and even a fun little `/food` rating page.

### Overview

- `pages/api/things/*`: API routes for retrieving the 'internet things' destinations on the `/bookmarks` page.
- `pages/api/food`: API route for retrieving all the food on the `/food` page.
- `pages/bookmarks`: Retrieves information from `pages/api/things/*` to display the content on the internet I find most fascinating.
  - The "Currently reading 📚" section data updates in real-time from an RSS feed from [Oku](https://oku.club/).
- `pages/food`: Retrieves information from `pages/api/food` to display the food my girlfriend and I keep track of.
- `pages/things`: This is an authenticated route which displays a UI for me to select which category I want to add to (bookmarks or food.)
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
OKU_CURRENTLY_READING_URL=
```

### Built With

- [Vercel](https://vercel.com/)
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Stitches.js](https://stitches.dev/)
