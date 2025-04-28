This is a [Next.js](https://nextjs.org) project made in Rockeatseat's React.js training. This project is a store that integrates with Stripe's API for sales.

## Getting Started

1. You have to have a <a href="https://dashboard.stripe.com"> Stripe </a> account. Add company and register your products.
1. Copy the test api keys
1. create a file: **.env.local**:
```bash
NEXT_URL=http://localhost:3000

STRIPE_PUBLIC_KEY=public_key_here
STRIPE_SECRET_KEY=secret_key_here

```
1. Install dependencies:
```bash
npm install
```
1. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
