const { PrismaClient } = require("@prisma/client");

async function seed() {
  await prisma.post.create({
    data: {
      title: "My first post",
      body: "Hello, world!",
    },
  });

  await prisma.post.create({
    data: {
      title: "My second post",
      body: "Hello, world!",
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((event: Error) => {
    console.error(event);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
