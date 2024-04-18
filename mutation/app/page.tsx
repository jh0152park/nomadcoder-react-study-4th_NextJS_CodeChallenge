export default function Home() {
    return (
        <main className="flex justify-center items-start w-full h-screen bg-[url(https://assets.coingecko.com/coins/images/33898/large/msg-4035486419-2265.jpg)] flex-col px-[20%] py-[15%] ">
            <span className="mb-10 text-4xl font-bold">Popo.tv</span>
            <section className="w-[770px] h-[500px] bg-[#E8EFCF] flex flex-col justify-center items-center">
                <video
                    src="https://random.dog/4eee5dd0-189c-45b0-83a5-c63d31c11242.mp4"
                    autoPlay
                    controls
                    loop
                    muted
                    style={{
                        width: "50%",
                        height: "60%",
                    }}
                />
            </section>
        </main>
    );
}
