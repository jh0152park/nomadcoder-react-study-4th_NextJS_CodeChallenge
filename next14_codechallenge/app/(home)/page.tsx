"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ILoginForm {
    name: string;
    email: string;
    password: string;
}

export default function Home() {
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ILoginForm>({
        mode: "onChange",
    });

    const [isLogin, setIsLogin] = useState(false);

    function onSubmit() {
        setIsLogin((prev) => !prev);
    }

    return (
        <main className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-start w-full h-screen max-w-screen-sm px-10 py-14 ">
                <span className="mb-10 text-4xl font-bold text-green-500">
                    Login
                </span>
                <Image
                    src={isLogin ? "/pepe_thumbup.png" : "/pepe_computer.png"}
                    width={250}
                    height={250}
                    style={{ width: "auto", height: "auto" }}
                    alt="pepe_image"
                />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-[300px] mt-10 flex flex-col gap-4"
                >
                    <div className="flex flex-col items-start justify-start w-full gap-3">
                        <span className="text-lg font-semibold ">Name</span>
                        <input
                            className="w-full h-10 px-2 rounded-2xl bg-inherit focus:outline-none ring-1 focus:ring-4 ring-neutral-200 focus:ring-green-500 placeholder:text-neutral-400"
                            type="text"
                            required
                            placeholder="write your name"
                            {...register("name", { required: true })}
                        />
                        <span className="-mt-1 text-sm text-red-400">
                            {watch("name") === ""
                                ? "Please write down your name"
                                : null}
                        </span>
                    </div>

                    <div className="flex flex-col items-start justify-start w-full gap-3">
                        <span className="text-lg font-semibold ">Email</span>
                        <input
                            className="w-full h-10 px-2 rounded-2xl bg-inherit focus:outline-none ring-1 focus:ring-4 ring-neutral-200 focus:ring-green-500 placeholder:text-neutral-400"
                            type="email"
                            required
                            placeholder="Only @namver.com"
                            {...register("email", {
                                required: true,
                                validate: {
                                    isNaver: (value) =>
                                        value.includes("@naver.com") ||
                                        "Only @naver emails allowed",
                                },
                            })}
                        />
                        <span className="-mt-1 text-sm text-red-400">
                            {errors.email?.message
                                ? errors.email.message
                                : watch("email") === ""
                                  ? "Please write down your email"
                                  : ""}
                        </span>
                    </div>

                    <div className="flex flex-col items-start justify-start w-full gap-3">
                        <span className="text-lg font-semibold ">Password</span>
                        <input
                            className="w-full h-10 px-2 rounded-2xl bg-inherit focus:outline-none ring-1 focus:ring-4 ring-neutral-200 focus:ring-green-500 placeholder:text-neutral-400"
                            type="password"
                            required
                            placeholder="Min 10 characters"
                            {...register("password", {
                                required: true,
                                minLength: {
                                    value: 10,
                                    message:
                                        "Password has to be more than 10 chars",
                                },
                            })}
                        />
                        <span className="-mt-1 text-sm text-red-400">
                            {errors.password?.message
                                ? errors.password.message
                                : watch("password") === ""
                                  ? "Please write down your password"
                                  : ""}
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-start w-full gap-2">
                        <button
                            type="submit"
                            className="w-full h-10 bg-green-500 rounded-2xl hover:bg-green-600"
                        >
                            Login
                        </button>
                        {isLogin && (
                            <span className="text-xl font-bold text-green-500 ">
                                Thank you :P
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
}
