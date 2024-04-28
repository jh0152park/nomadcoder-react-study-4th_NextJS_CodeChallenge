import { notFound } from "next/navigation";
import { IsExistPost } from "./action";

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

    return <h1>{id} post !</h1>;
}
