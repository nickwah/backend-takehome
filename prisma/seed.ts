import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const users = new Array(10).fill(0).map(() =>
    prisma.user.create({
      data: {
        name: faker.name.fullName(),
        email: faker.internet.email(),
      },
    })
  );
  await prisma.$transaction(users);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
