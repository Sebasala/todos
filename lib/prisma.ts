/**
 * Prisma client configuration for database interactions.
 * This file sets up a singleton PrismaClient instance with Better SQLite3 adapter.
 */

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// Extend the global object to store the PrismaClient instance
// This is a common pattern to avoid multiple instances in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Retrieve the database connection string from environment variables
const connectionString = `${process.env.DATABASE_URL}`;

// Create a Better SQLite3 adapter using the connection string
const adapter = new PrismaBetterSqlite3({ url: connectionString });

// Export the PrismaClient instance
// Reuse existing instance if available (from global), otherwise create a new one with the adapter
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

// In development mode, store the instance on the global object to persist across hot reloads
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
