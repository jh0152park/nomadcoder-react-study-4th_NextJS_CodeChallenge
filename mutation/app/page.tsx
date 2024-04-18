"use client";

import useSWR from "swr";

async function fetcher() {
    const API_URL = "https://dogs-api.nomadcoders.workers.dev";
    return fetch(API_URL).then((res) => res.json());
}

export default function Home() {
    const { data, mutate } = useSWR("dog_video", fetcher);

    function onDogClick() {
        mutate();
    }

    function toggleLike() {
        mutate({ ...data, isLiked: !data?.isLiked }, false);
    }

    return (
        <main className="flex justify-center items-start w-full h-screen bg-[url(https://assets.coingecko.com/coins/images/33898/large/msg-4035486419-2265.jpg)] flex-col px-[20%] py-[15%] ">
            <span className="mb-10 text-4xl font-bold">Popo.tv</span>
            <section className="w-[770px]  h-[500px] bg-[#E8EFCF] flex flex-col justify-center items-center px-10 gap-5">
                <video
                    autoPlay
                    controls
                    loop
                    muted
                    style={{
                        width: "500px",
                        height: "350px",
                    }}
                    src={data?.url}
                ></video>
                <div className="flex items-center justify-center w-full h-[50px] gap-1">
                    <button
                        className="w-full h-full bg-white rounded-lg hover:cursor-pointer hover:bg-[#f3f3f3] transition-all"
                        onClick={onDogClick}
                    >
                        🐶
                    </button>
                    <button
                        className="w-full h-full transition-all rounded-lg bg-sky-400 hover:cursor-pointer hover:bg-sky-500"
                        onClick={toggleLike}
                    >
                        {data?.isLiked ? "😻" : "😿"}
                    </button>
                </div>
            </section>
        </main>
    );
}
