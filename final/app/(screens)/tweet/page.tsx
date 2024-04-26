import MBBuffer from "@/components/post/mb-buffer";
import PostSummary from "@/components/post/post-summary";
import PRISMA_DB from "@/lib/db/prisma-db";
import Image from "next/image";

async function getAllPosts() {
    const posts = await PRISMA_DB.post.findMany({
        orderBy: {
            created_at: "desc",
        },
        select: {
            id: true,
            like: true,
            userId: true,
            payload: true,
            comment: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    profile_image: true,
                },
            },
        },
    });
    return posts;
}

export default async function Posts() {
    const posts = await getAllPosts();

    return (
        <div className="w-full min-h-screen max-w-[430px] pt-20 ">
            <div className="fixed top-0 flex items-center max-w-[430px] justify-center w-full bg-black -translate-x-1/2 left-1/2 border border-neutral-400 border-t-0 border-b-0">
                <Image
                    src="/image/logo.png"
                    alt="logo"
                    width="50"
                    height="50"
                    priority={true}
                    style={{
                        width: "auto",
                        height: "auto",
                    }}
                />
            </div>

            {posts.map((post) => (
                <PostSummary key={post.id} {...post} />
            ))}
            <MBBuffer mb="32" />
        </div>
    );
}
