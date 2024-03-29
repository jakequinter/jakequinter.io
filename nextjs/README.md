### Overview

- `pages/api/food`: API route for retrieving all the food on the `/food` page.
- `pages/api/image`: API route for generating a timestamp and signature needed to upload images to [Cloudinary](https://cloudinary.com/).
- `pages/bookshelf`: Retrieves data in real-time from [Oku](https://oku.club/) RSS feed.
- `pages/food`: Retrieves information from `pages/api/food` to display the food my girlfriend and I keep track of.
- `pages/admin`: This is an authenticated route which displays a form for me to upload images to Cloudinary and display them on the `/food` page.
- `pages/*`: All other pages are static pages.

### Running Locally

```
$ git clone https://github.com/jakequinter/jakequinter.io.git
$ cd jakequinter.io
$ pnpm
$ pnpm dev
```

Create a `.env.local` file similar to what is posted below:

```
#App
SITE_URL=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_KEY=
CLOUDINARY_SECRET=

# Oku
OKU_CURRENTLY_READING_URL=
OKU_TO_READ_URL=
OKU_READ_URL=

# Prisma
PLANETSCALE_PRISMA_DATABASE_URL=
SHADOW_DATABASE_URL=
USER_ID=

# NextAuth
NEXTAUTH_URL=
SECRET=
GOOGLE_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
NEXT_PUBLIC_USER_EMAIL=
```

### Built With

- [Vercel](https://vercel.com/)
- [Next.js](https://nextjs.org/)
- [PlanetScale](https://planetscale.com/)
- [Prisma](https://www.prisma.io/)
- [Cloudinary](https://cloudinary.com/)
- [Radix](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
