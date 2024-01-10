import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

db.snippet.create({
  data: {
    title: 'Hello World',
    code: 'const abc = () => {}',
  },
});

export default db;
