import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.post.create({
        data: {
            content: "Hello World",
            title: "My first post",
            createdAt: new Date(),
        },
    });
    await prisma.post.create({
        data: {
            content: "Hello World2",
            title: "My second post",
            createdAt: new Date(),
        },
    });
    await prisma.post.create({
        data: {
            content: "Hello Mars",
            title: "My third post",
            createdAt: new Date(),
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
