import { PrismaPg } from '@prisma/adapter-pg';

import { Prisma, PrismaClient } from '@/prisma/generated/prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

/**
 * Soft-delete helpers (Option A)
 * Use these in queries so deleted users are excluded by default.
 */
export const activeUserWhere: Prisma.UserWhereInput = {
  deletedAt: null,
};

export default prisma;
