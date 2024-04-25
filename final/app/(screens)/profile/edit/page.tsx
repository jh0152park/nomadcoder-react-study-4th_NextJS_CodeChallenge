"use client";

import Input from "@/components/input";
import BackButton from "@/components/profile/back-button";
import TextArea from "@/components/text-area";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function EditProfile() {
    return (
        <div className="relative flex flex-col items-start justify-start w-full h-screen p-5 ">
            <BackButton />

            <span className="absolute text-xl font-bold -translate-x-1/2 left-1/2 top-5">
                Edit Profile
            </span>

            <form className="flex flex-col gap-5 mt-20">
                <div className="flex flex-col items-start justify-start gap-2">
                    <span className="font-semibold">Username</span>
                    <Input
                        name="username"
                        type="text"
                        placeholder="Username"
                        // errors={state?.fieldErrors.email}
                    />
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <span className="font-semibold">Profile Description</span>
                    <TextArea
                        name="profile-description"
                        placeholder="Description"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Profile Photo</span>
                    <label
                        htmlFor="photo"
                        className="flex items-center justify-center bg-center bg-cover border-2 border-dashed rounded-md hover:cursor-pointer aspect-square"
                    >
                        <PhotoIcon className="w-20" />
                    </label>
                    <input
                        id="photo"
                        type="file"
                        name="profile-photo"
                        accept="image/*"
                        className="hidden"
                    />
                </div>
            </form>
        </div>
    );
}
