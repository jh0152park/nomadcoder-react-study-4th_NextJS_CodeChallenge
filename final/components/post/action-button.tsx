"use client";

import useSWR from "swr";
import { useState } from "react";
import {
    ChatBubbleOvalLeftIcon as OutlineChatIcon,
    HeartIcon as OutlineHeartIcon,
    ArrowPathIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import {
    DecreaseLike,
    IncreaseLike,
    IsAlreadyLike,
} from "@/app/(screens)/tweet/action";

async function mockingAPI(id: number, userId: number) {
    return await IsAlreadyLike(id, userId);
}

export default function ActionButton({
    id,
    userId,
    likeCount,
}: {
    id: number;
    userId: number;
    likeCount: number;
}) {
    const [share, setShare] = useState(false);
    const [message, setMessage] = useState(false);

    const { data, mutate } = useSWR(
        `like_${id}`,
        () => mockingAPI(id, userId),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
        }
    );

    async function toggleHeart() {
        if (data?.like) {
            // currently already like
            mutate(
                {
                    like: !data?.like,
                    count: data?.count! - 1 > 0 ? data?.count! - 1 : 0,
                },
                false
            );
            await DecreaseLike(id, likeCount, userId);
        } else {
            // currently not like
            mutate(
                {
                    like: !data?.like,
                    count: data?.count! + 1,
                },
                false
            );
            await IncreaseLike(id, likeCount, userId);
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-start gap-2 mt-3">
                {data?.like ? (
                    <SolidHeartIcon
                        className={`${["w-[22px]", data.like ? "text-red-500" : ""].join(" ")}`}
                        onClick={toggleHeart}
                    />
                ) : (
                    <OutlineHeartIcon
                        className="w-[22px] "
                        onClick={toggleHeart}
                    />
                )}
                <OutlineChatIcon className="w-[22px]" />
                <ArrowPathIcon
                    className={`${["w-[22px]", share ? "text-green-500" : ""].join(" ")}`}
                    onClick={() => setShare((prev) => !prev)}
                />
                <PaperAirplaneIcon
                    className={`${["w-[22px]", message ? "text-blue-500" : ""].join(" ")}`}
                    onClick={() => setMessage((prev) => !prev)}
                />
            </div>
            <span className="mt-2 text-sm text-neutral-400">
                {data?.count} likes
            </span>
        </div>
    );
}
