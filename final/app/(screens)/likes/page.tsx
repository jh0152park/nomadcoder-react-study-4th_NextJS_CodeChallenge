import PRISMA_DB from "@/lib/db/prisma-db";
import getSession from "@/lib/session/get-session";

async function getAllLikePost(sid: number) {
    const user = await PRISMA_DB.user.findUnique({
        where: {
            id: sid,
        },
        select: {
            likePost: true,
        },
    });

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

    return posts.filter((post) => user?.likePost.includes(post.id));
}

export default async function Likes() {
    const session = await getSession();
    const likePosts = await getAllLikePost(session.id!);

    return <h1>Likes Page</h1>;
}
