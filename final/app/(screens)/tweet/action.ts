"use server";

import PRISMA_DB from "@/lib/db/prisma-db";
import { redirect } from "next/navigation";

export async function DeletePost(id: number) {
    await PRISMA_DB.post.delete({
        where: {
            id: id,
        },
    });
    redirect("/tweet");
}

export async function IncreaseLike(id: number, like: number, uid: number) {
    await PRISMA_DB.post.update({
        where: {
            id: id,
        },
        data: {
            like: like + 1,
        },
    });
    await AddLikeList(id, uid);
}

export async function DecreaseLike(id: number, like: number, uid: number) {
    await PRISMA_DB.post.update({
        where: {
            id: id,
        },
        data: {
            like: like - 1 > 0 ? like - 1 : 0,
        },
    });
    await DeleteLikeList(id, uid);
}

export async function IsAlreadyLike(id: number, uid: number) {
    const user = await PRISMA_DB.user.findUnique({
        where: {
            id: uid,
        },
        select: {
            likePost: true,
        },
    });

    return {
        like: user?.likePost.includes(id),
    };
}

export async function AddLikeList(id: number, uid: number) {
    const user = await PRISMA_DB.user.findUnique({
        where: {
            id: uid,
        },
        select: {
            likePost: true,
        },
    });

    await PRISMA_DB.user.update({
        where: {
            id: uid,
        },
        data: {
            likePost: [...user?.likePost!, id],
        },
    });
}

export async function DeleteLikeList(id: number, uid: number) {
    const user = await PRISMA_DB.user.findUnique({
        where: {
            id: uid,
        },
        select: {
            likePost: true,
        },
    });

    const newLikeList = user?.likePost.filter((lid) => lid !== id);

    await PRISMA_DB.user.update({
        where: {
            id: uid,
        },
        data: {
            likePost: newLikeList,
        },
    });
}
