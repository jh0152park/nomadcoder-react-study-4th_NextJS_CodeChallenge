import BackButton from "@/components/profile/back-button";
import { SearchPost } from "../action";
import PostSummary from "@/components/post/post-summary";
import MBBuffer from "@/components/post/mb-buffer";

export default async function SearchDetail({
    params,
}: {
    params: { keyword: string };
}) {
    const decodeKeyword = decodeURI(params.keyword);
    const posts = await SearchPost(decodeKeyword);

    return (
        <div className="w-full max-w-[430px] h-full flex flex-col items-start justify-start  ">
            <div className="pt-5 pl-5 mb-14">
                <BackButton />
            </div>

            <span className="absolute text-xl font-bold -translate-x-1/2 left-1/2 top-5">
                Search for {decodeKeyword}
            </span>
            {posts.map((post) => (
                <PostSummary key={post.id} {...post} />
            ))}
            <MBBuffer mb="32" />
        </div>
    );
}
