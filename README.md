# T3 Stack Application - Coingecko API

This is an application that utilizes the T3 Stack (tRPC, Prisma, NextJS, Tailwind) to fetch historical data from the Coingecko API for Bitcoin. The application also includes a prompt input field that uses the OpenAI GPT-3 API to generate responses.

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env.local` file with the following environment variables:

```
COINGECKO_API_KEY=
CHATGPT3_API_KEY=
CHATGPT3_API_ORG=
```

4. Run `npm run dev` to start the development server
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Fetches historical data from Coingecko API for Bitcoin
- Prompt input field that generates responses using OpenAI GPT-3 API
- Responsive UI built with Tailwind CSS
- Built using the T3 Stack

## Dependencies

- [tRPC](https://trpc.io/) - A TypeScript RPC framework built for React
- [Prisma](https://www.prisma.io/) - A modern database toolkit
- [Next.js](https://nextjs.org/) - A React framework for building server-side rendered applications
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## API Endpoints

### `/api/coingecko`

This endpoint fetches historical data for Bitcoin from the Coingecko API.

#### Query Parameters

- `days` (required) - The number of days of historical data to fetch.

Example: `/api/coingecko?days=7`

### `/api/openai`

This endpoint generates responses using the OpenAI GPT-3 API.

#### Query Parameters

- `prompt` (required) - The prompt to generate a response for.

Example: `/api/openai?prompt=What is the meaning of life?`

## Acknowledgements

- [Coingecko API](https://www.coingecko.com/en/api)
- [OpenAI GPT-3 API](https://openai.com/api/gpt-3/)
- [Tailwind Starter Kit by Creative Tim](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation)
- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
