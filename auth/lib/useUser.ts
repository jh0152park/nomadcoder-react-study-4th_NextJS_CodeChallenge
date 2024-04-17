import useSWR from "swr";
import { useRouter } from "next/router";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface IResponse {
    isSuccess: boolean;
    profile: User;
}

export default function useUser() {
    const router = useRouter();
    const { data, error } = useSWR<IResponse>("/api/users/me");

    console.log(data);

    useEffect(() => {
        if (data && !data.isSuccess) {
            // something went wrong
            alert(
                "something went wrong, please try login again or sign up first"
            );
            router.replace("/create-account");
        }
    }, [data, router]);

    return {
        user: data?.profile,
        isLoading: !data && !error,
    };
}
