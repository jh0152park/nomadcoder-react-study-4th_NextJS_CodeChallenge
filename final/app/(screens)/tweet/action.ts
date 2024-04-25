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
