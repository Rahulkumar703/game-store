import { PrismaClient } from "@prisma/client";

let prisma;

const prismaClientSingleton = () => {
  return new PrismaClient();
};

if (!global.prismaGlobal) {
  prisma = prismaClientSingleton();
  if (process.env.NODE_ENV !== "production") {
    global.prismaGlobal = prisma;
  }
} else {
  prisma = global.prismaGlobal;
}

module.exports = prisma;
