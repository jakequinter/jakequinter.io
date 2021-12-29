import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

// Next.js specific - to not exhaust DB connections
if (process.env.NODE_ENV === 'production') {
  console.log('new prisma client instantiated');
  prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient({
      log: ['query', 'info', 'warn'],
    });
  }
  // @ts-ignore
  prisma = global.prisma;
}

export { prisma, PrismaClient };