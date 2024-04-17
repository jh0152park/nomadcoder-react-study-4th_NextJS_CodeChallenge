import Image from "next/image";
import useUser from "@/lib/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Default() {
    // const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        router.push("/create-account");
    }, []);

    return null;
}
