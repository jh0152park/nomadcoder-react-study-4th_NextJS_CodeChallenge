import { notFound } from "next/navigation";
import { IsExistPost } from "./action";
import BackButton from "@/components/profile/back-button";

export default async function TweetDetail({
    params,
}: {
    params: { id: number };
}) {
    const id = params.id;
    if (isNaN(id)) {
        notFound();
    }

    if (!(await IsExistPost(id))) {
        notFound();
    }

    return (
        <div className="w-full max-w-[430px] h-full flex flex-col items-start justify-start p-5 ">
            <BackButton />

            <span className="absolute text-xl font-bold -translate-x-1/2 left-1/2 top-5"></span>
        </div>
    );
}
