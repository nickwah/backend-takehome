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
  const documents = new Array(20).fill(0).map(() =>
    prisma.document.create({
      data: {
        authorId: Math.floor(Math.random() * 10) + 1,
        title: faker.lorem.words(5),
        content: faker.lorem.paragraphs(),
      },
    })
  );
  await prisma.$transaction(documents);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
