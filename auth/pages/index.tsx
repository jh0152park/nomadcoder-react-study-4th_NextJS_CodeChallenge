import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col w-[350px] h-[200px] bg-[#c0c0c0] border-2 border-r-black border-b-black">
            <div className="w-full h-[30px] bg-gradient-to-r from-[#0a246d] to-[#a1c9f3] flex items-center justify-start px-5 font-semibold">
                Welcome
            </div>
            <div className="flex flex-col w-full h-full gap-2 p-5">
                <div className="flex flex-col items-start w-full gap-1 ">
                    <div className="flex items-center justify-start w-full gap-1 text-black">
                        <Image
                            src="/images/user.png"
                            alt="user-image"
                            width="20"
                            height="20"
                        />
                        <span>Username</span>
                    </div>

                    <input
                        className="w-full px-2 text-black border-2 read-only:bg-[#808080] read-only:text-[#979797] border-l-gray-500 border-t-gray-500 border-r-gray-300 border-b-gray-300 placeholder:text-black focus:outline-none "
                        type="email"
                        readOnly={true}
                        value="your email"
                    />
                </div>
                <div className="flex flex-col items-start w-full gap-1">
                    <div className="flex items-center justify-start w-full gap-1 text-black">
                        <Image
                            src="/images/email.png"
                            alt="user-image"
                            width="20"
                            height="20"
                        />
                        <span>Email</span>
                    </div>
                    <input
                        className="w-full px-2 text-black border-2 read-only:bg-[#808080] read-only:text-[#979797] border-l-gray-500 border-t-gray-500 border-r-gray-300 border-b-gray-300 placeholder:text-black focus:outline-none"
                        type="email"
                        readOnly={true}
                        value="your email"
                    />
                </div>
            </div>
        </div>
    );
}
