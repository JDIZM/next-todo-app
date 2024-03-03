This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Intro

A todo app built with Next.js, TypeScript, Storybook.

This project uses [Volta](https://volta.sh/) to manage Node.js and Yarn versions.

You can install volta with:

```
curl https://get.volta.sh | bash
```

### Built with

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

Note: using a mixture of CSS modules and Tailwind CSS for styling just for example purposes.

### A list of features

- [x] local api routes
- [x] fetch todos from local api using [client side data fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side) with `React hooks` and `fetch`.
- [x] fetch todos from jsonplaceholder api using [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)
- [x] display a list of todo items
- [x] add todo items
- [x] remove todo items
- [ ] edit todo items
- [x] mark todos as complete
- [ ] filter todos
- [x] save updated data to local storage;
- [x] load updated data from local storage if available

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
