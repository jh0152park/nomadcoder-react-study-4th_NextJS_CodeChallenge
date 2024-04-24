import Image from "next/image";
import Input from "@/components/input";
import LoadingButton from "@/components/loading-button";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-start w-full h-full  px-10">
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
            <span className="font-bold text-2xl mb-10">Log In</span>

            <form className="flex flex-col gap-3 ">
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    // errors={state?.fieldErrors.email}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    // errors={state?.fieldErrors.password}
                />
                <LoadingButton name="Login" />
            </form>
            <span className="text-sm text-center w-full mt-2">
                Don't have an accont yet?
                <Link href="/create-account"> Let's create new one 👻</Link>
            </span>
        </div>
    );
}
