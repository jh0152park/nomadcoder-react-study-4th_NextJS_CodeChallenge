import Image from "next/image";
import MoreButton from "./more-button";
import getSession from "@/lib/session/get-session";
import { DEFAULT_PROFILE_PHOTO } from "@/lib/project-common";
import ActionButton from "./action-button";

interface IPost {
    id: number;
    user: {
        username: string;
        id: number;
        profile_image: string | null;
    };
    payload: string;
    like: number;
    comment: string[];
    userId: number;
}

export default async function PostSummary({
    id,
    user,
    like,
    userId,
    payload,
    comment,
}: IPost) {
    const session = await getSession();

    return (
        <div className="flex items-start justify-start w-full p-4 max-w-[430px]  hover:bg-neutral-900 transition-all duration-200 hover:cursor-pointer rounded-md">
            <div className="overflow-hidden rounded-full size-[50px] mr-5">
                <Image
                    src={
                        user.profile_image === DEFAULT_PROFILE_PHOTO
                            ? user.profile_image
                            : `${user.profile_image}/public`
                    }
                    alt={user.username}
                    width="50"
                    height="50"
                    style={{
                        width: "50px",
                        height: "50px",
                    }}
                />
            </div>
            <div className="flex flex-col items-start w-[320px]">
                <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-[12px] font-semibold">
                        {user.username}
                    </span>
                    {userId === session.id && <MoreButton id={id} />}
                </div>
                <span className="text-sm font-extralight">{payload}</span>

                <ActionButton likeCount={like} id={id} userId={userId} />
            </div>
        </div>
    );
}
