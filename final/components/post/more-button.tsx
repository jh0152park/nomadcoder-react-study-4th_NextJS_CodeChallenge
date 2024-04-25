"use client";

import { useState } from "react";
import { DeletePost } from "@/app/(screens)/tweet/action";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

export default function MoreButton({ id }: { id: number }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <EllipsisHorizontalIcon
                className="w-5 hover:cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            />
            <form action={() => DeletePost(id)}>
                <button
                    className="absolute top-0 px-2 py-1 text-sm transition-all bg-red-500 rounded-md cursor-pointer -left-16"
                    style={{
                        display: open ? "block" : "none",
                    }}
                    type="submit"
                >
                    Delete
                </button>
            </form>
        </div>
    );
}
