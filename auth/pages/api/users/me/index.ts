import client from "@/lib/prismaClient";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";

interface IResponse {
    isSuccess: boolean;
    [key: string]: any;
}

interface ISessionForm {
    id: number;
    email: string;
    username: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponse>
) {
    const session = await getIronSession<ISessionForm>(req, res, {
        cookieName: "registered-user",
        password: process.env.COOKEI_PASSWORD!,
    });

    console.log("session");
    console.log(session);

    if (!session.id) {
        console.log("can not find login session");

        return res.status(401).json({
            isSuccess: false,
            message: "Login is required",
        });
    }

    const profile = await client.user.findUnique({
        where: {
            id: session.id,
        },
        select: {
            id: true,
            username: true,
            email: true,
        },
    });

    console.log(`session id: ${session.id}`);
    console.log(`profile id: ${profile?.id}`);

    if (!profile) {
        return res.status(400).json({
            isSuccess: false,
            message: "Can not find user",
        });
    }

    if (session.id === profile.id) {
        return res.status(200).json({
            isSuccess: true,
            profile,
        });
    }
}
