import Image from "next/image";

async function getAllPosts() {
    await new Promise((resolve) => setTimeout(resolve, 30 * 1000));
}

export default async function Posts() {
    await getAllPosts();

    return (
        <div className="w-full h-full max-w-[430px] flex flex-col items-center justify-start ">
            <div className="fixed top-0 max-w-[430px] flex items-center justify-center w-full bg-black border border-neutral-400 border-t-0 border-b-0">
                <Image
                    src="/image/logo.png"
                    alt="logo"
                    width="50"
                    height="50"
                    priority={true}
                    style={{
                        width: "auto",
                        height: "auto",
                    }}
                />
            </div>
        </div>
    );
}
