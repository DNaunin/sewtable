## Sewtable

Sewtable is my Capstone project, created within a Web Development Bootcamp.
You can upload fabric photos and look how they would turn out with a clothing design of your choosing. It is supposed to inspire sewists to tackle new sewing projects.

## Installing and Starting

First, run the development server:

```bash
npm install
# and
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To upload pictures with your repository, you need your own Cloudinary Cloud and define your cloud in the .env.local
The URL is as follows:
https://api.cloudinary.com/v1_1/${yourCloud}/image/upload
NEXT_PUBLIC_CLOUDINARY_URL = ${yourCloud}

Just insert the name of your Cloud in ${yourCloud}!

## Deployment

Check out [Sewtable](https://sewtable.herokuapp.com/) here!

## Development

- React.js
- Next.js
- Storybook
- Typescript
