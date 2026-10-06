# Todos App

A simple, server-rendered todo application built with Next.js, TypeScript, and Prisma. Todos are stored in a PostgreSQL database.

## Features

- **Server-Side Rendering**: Built with Next.js for optimal performance and SEO.
- **Database Integration**: Uses Prisma ORM with PostgreSQL for data persistence.
- **Type Safety**: Fully typed with TypeScript.
- **Todo Management**: Create, view, complete, and delete todos.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (v16.1.4)
- **Database**: PostgreSQL with [Prisma](https://prisma.io)
- **Language**: TypeScript
- **Styling**: CSS Modules (built-in Next.js)
- **Linting**: ESLint

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org) (v18 or later)
- [pnpm](https://pnpm.io) (use the version pinned in `package.json` under `packageManager`)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd todos
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

## Setup

1. Create a `.env` file in the root directory and add the following environment variable:

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
   ```

   Replace the placeholders with the connection details for your PostgreSQL database.

2. Generate the Prisma client and apply the migrations:

   ```bash
   pnpm exec prisma generate
   pnpm exec prisma migrate dev
   ```

   This applies the migrations in `prisma/migrations` to your database.

3. (Optional) Open Prisma Studio to inspect the database:

   ```bash
   pnpm exec prisma studio
   ```

## Running the App

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. The page will auto-update as you make changes to the code.

## Usage

- Create todos with the form, mark them complete with the checkbox, or delete them with the delete button.
- Todos are currently shared: the app does not authenticate users or separate todos by account.

## Authentication

Authentication is not currently implemented. To add account-based access, use [Auth.js](https://authjs.dev/) with an OAuth provider such as GitHub or Google:

1. Configure Auth.js and the provider, and store provider credentials and the session secret in environment variables. Follow the provider's current Auth.js setup instructions for the required variables.
2. Add a user identity and a required user relation to the `Todo` model in `prisma/schema.prisma`, then create and apply a Prisma migration. Plan how existing todos will be assigned to users before making the relation required.
3. Require a valid session in every Server Action and server-side data function that reads or changes todos. Hiding controls or protecting only the page is not sufficient: Server Actions can be called directly.
4. Scope todo queries and mutations to the authenticated user's ID. For mutations, verify ownership in the database operation itself so one user cannot modify or delete another user's todos.
5. Test unauthenticated access and cross-account access for listing, creating, completing, and deleting todos.

Until those changes are implemented, the app should be treated as a shared todo list, not as a private per-user service.

## Development

- **Linting**: Run `pnpm lint` to check for code issues.
- **Building**: Use `pnpm build` to create a production build.
- **Starting Production**: Run `pnpm start` after building.

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
