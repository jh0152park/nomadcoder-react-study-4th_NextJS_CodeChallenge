import Image from "next/image";
import BackButton from "@/components/profile/back-button";
import getSession from "@/lib/session/get-session";
import PRISMA_DB from "@/lib/db/prisma-db";
import Link from "next/link";

export default async function Profile() {
    const session = await getSession();

    const user = await PRISMA_DB.user.findUnique({
        where: {
            id: session.id,
        },
        select: {
            email: true,
            username: true,
            description: true,
            profile_image: true,
        },
    });

    return (
        <div className="w-full max-w-[430px] h-screen flex flex-col items-start">
            <div className="flex flex-col items-start w-full px-5">
                <BackButton />
                <div className="flex items-center justify-between w-full mt-10">
                    <div className="flex flex-col items-start justify-center">
                        <span className="text-4xl font-bold">
                            🌈 {user?.username} ✨
                        </span>
                        <span className="mb-5 text-lg font-semibold">
                            {user?.email}
                        </span>
                    </div>
                    <Image
                        src={user?.profile_image!}
                        alt={user?.username!}
                        width="70"
                        height="70"
                        className="rounded-full"
                    />
                </div>

                <span className="w-[90%] h-14 font-extralight text-md ">
                    {user?.description}
                </span>

                <Link
                    href="/profile/edit"
                    className="w-full mt-5  py-1.5 border rounded-lg border-neutral-500 hover:bg-neutral-950 transition-all text-center"
                >
                    Edit profile
                </Link>
            </div>

            <div className="w-full pb-2 mt-12 text-center border-b-2 border-neutral-500">
                Threads
            </div>
        </div>
    );
}
