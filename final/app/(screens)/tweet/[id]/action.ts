"use server";

import PRISMA_DB from "@/lib/db/prisma-db";

export async function IsExistPost(id: number) {
    const post = await PRISMA_DB.post.findUnique({
        where: {
            id: +id,
        },
        select: {
            id: true,
        },
    });

    return Boolean(post);
}
