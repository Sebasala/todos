# Todos App

A simple, server-side rendered todo application built with Next.js, TypeScript, and Prisma. This app allows users to view a list of todos stored in a SQLite database.

## Features

- **Server-Side Rendering**: Built with Next.js for optimal performance and SEO.
- **Database Integration**: Uses Prisma ORM with SQLite for data persistence.
- **Type Safety**: Fully typed with TypeScript.
- **Responsive Design**: Clean and simple UI for viewing todos.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (v16.1.4)
- **Database**: SQLite with [Prisma](https://prisma.io) (v7.3.0)
- **Language**: TypeScript
- **Styling**: CSS Modules (built-in Next.js)
- **Linting**: ESLint

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org) (v18 or later)
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) or [pnpm](https://pnpm.io) or [bun](https://bun.sh)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd todos
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

## Setup

1. Create a `.env` file in the root directory and add the following environment variable:

   ```env
   DATABASE_URL="file:./dev.db"
   ```

2. Set up the database:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

   This will generate the Prisma client and create the SQLite database with the Todo model.

3. (Optional) Seed the database with sample data:
   - You can manually add todos via Prisma Studio or extend the app to include creation functionality.

## Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. The page will auto-update as you make changes to the code.

## Usage

- The app displays a list of todos fetched from the database.
- Currently, the app supports viewing todos. Future updates may include adding, editing, and deleting todos.

## Development

- **Linting**: Run `npm run lint` to check for code issues.
- **Building**: Use `npm run build` to create a production build.
- **Starting Production**: Run `npm run start` after building.

## Project Structure

```
todos/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ...
├── components/            # React components
│   └── Todos/
│       └── Todos.tsx      # Todos component
├── lib/                   # Utility functions and actions
│   ├── actions.ts         # Server actions
│   └── prisma.ts          # Prisma client setup
├── prisma/                # Database schema and migrations
│   └── schema.prisma
└── ...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and not licensed for public use.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://prisma.io/docs)
- [TypeScript Handbook](https://typescriptlang.org/docs)

## Deploy on Vercel

Deploy your Next.js app easily with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## POC Rebase

This is a POC to test rebase on local and git.
