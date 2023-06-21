import { PrismaClient } from "@prisma/client";
import { unstable_cache } from "next/cache";

const prisma = new PrismaClient();
/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
    const posts = await unstable_cache(() => {
        return prisma.post.findMany();
    })();
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    {/* The below line causes the error, because unstable_cache will return a string rather than a Date */}
                    <p>{post.createdAt.toISOString()}</p>{" "}
                </div>
            ))}
        </div>
    );
}
