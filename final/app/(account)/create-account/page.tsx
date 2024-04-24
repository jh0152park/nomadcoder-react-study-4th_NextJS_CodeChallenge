import Input from "@/components/input";
import LoadingButton from "@/components/loading-button";
import Image from "next/image";

export default function CreateAccount() {
    return (
        <div className="flex flex-col items-center justify-start w-full h-full gap-10">
            <Image
                src="/image/logo.png"
                alt="logo"
                width="100"
                height="100"
                priority={true}
                style={{
                    width: "auto",
                    height: "auto",
                }}
            />

            <form className="flex flex-col gap-3 ">
                <Input name="email" type="email" placeholder="Email" required />
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                />
                <Input
                    name="password"
                    type="text"
                    placeholder="Password"
                    required
                />
                <LoadingButton name="Create" />
            </form>
        </div>
    );
}
