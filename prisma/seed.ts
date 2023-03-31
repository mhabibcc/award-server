// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const user1 = await prisma.users.upsert({
    where: { email: 'user1@award.id' },
    update: {},
    create: {
      email: 'user1@award.id',
      fullName: 'John Doe',
    },
  });

  const user2 = await prisma.users.upsert({
    where: { email: 'user2@award.id' },
    update: {},
    create: {
      email: 'user2@award.id',
      fullName: 'Albert Johnson',
    },
  });

  const award = [];

  for (let index = 0; index < 20; index += 3) {
    award[index] = await prisma.awards.upsert({
      where: { id: index + 1 },
      update: {},
      create: {
        id: index + 1,
        awardName: 'initial awards voucher',
        awardImage: '',
        pointExchange: 10000,
        awardType: 'Vouchers',
      },
    });

    award[index + 1] = await prisma.awards.upsert({
      where: { id: index + 2 },
      update: {},
      create: {
        id: index + 2,
        awardName: 'initial awards gift',
        awardImage: '',
        pointExchange: 15000,
        awardType: 'Giftcard',
      },
    });

    award[index + 2] = await prisma.awards.upsert({
      where: { id: index + 3 },
      update: {},
      create: {
        id: index + 3,
        awardName: 'initial awards products',
        awardImage: '',
        pointExchange: 25000,
        awardType: 'Products',
      },
    });
  }

  console.log({
    user1,
    user2,
    ...award,
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
