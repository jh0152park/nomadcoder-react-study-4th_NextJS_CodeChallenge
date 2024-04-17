import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";

interface ICreateAccountForm {
    username: string;
    email: string;
    password: string;
}

export default function CreateAccount() {
    const { register, watch, handleSubmit } = useForm<ICreateAccountForm>();

    function onSubmit(data: FieldValues) {
        console.log(data);
    }

    return (
        <form
            className="flex flex-col w-[350px] h-[300px] bg-[#c0c0c0] border-2 border-r-black border-b-black"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="w-full h-[30px] bg-gradient-to-r from-[#0a246d] to-[#a1c9f3] flex items-center justify-start px-5 font-semibold">
                Create Account
            </div>
            <div className="flex flex-col w-full h-full gap-2 p-5">
                <div className="flex flex-col items-start w-full gap-1">
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
                        className="w-full px-2 text-black border-2 border-l-gray-500 border-t-gray-500 border-r-gray-300 border-b-gray-300 placeholder:text-black focus:outline-none"
                        type="text"
                        {...register("username", { required: true })}
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
                        className="w-full px-2 text-black border-2 border-l-gray-500 border-t-gray-500 border-r-gray-300 border-b-gray-300 placeholder:text-black focus:outline-none"
                        type="email"
                        {...register("email", { required: true })}
                    />
                </div>

                <div className="flex flex-col items-start w-full gap-1">
                    <div className="flex items-center justify-start w-full gap-1 text-black">
                        <Image
                            src="/images/password.png"
                            alt="user-image"
                            width="20"
                            height="20"
                        />
                        <span>Password</span>
                    </div>
                    <input
                        className="w-full px-2 text-black border-2 border-l-gray-500 border-t-gray-500 border-r-gray-300 border-b-gray-300 placeholder:text-black focus:outline-none"
                        type="password"
                        {...register("password", { required: true })}
                    />
                </div>

                <button
                    type="submit"
                    className=" border-b-black border-r-black mt-3 border-2 w-full h-[35px] flex justify-center items-center text-black font-semibold hover:cursor-pointer active:border-l-black active:border-t-black active:border-r-gray-300 active:border-b-gray-300 "
                >
                    Sign up for free
                </button>
            </div>
        </form>
    );
}
