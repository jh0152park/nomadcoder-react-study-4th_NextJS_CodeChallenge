import client from "@/lib/prismaClient";
import withHandler from "@/lib/withHandler";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

interface IResponse {
    isSuccess: boolean;
    [key: string]: any;
}

async function Handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    const { email, password } = req.body;

    const user = await client.user.findUnique({
        where: {
            email: email,
            password: password,
        },
        select: {
            id: true,
            email: true,
            username: true,
        },
    });

    if (user) {
        const cookie = await getIronSession(req, res, {
            cookieName: "registered-user",
            password: process.env.COOKEI_PASSWORD!,
        });
        //@ts-ignore
        cookie.id = user.id;
        //@ts-ignore
        cookie.email = user.email;
        //@ts-ignore
        cookie.username = user.username;

        await cookie.save();

        return res.json({
            isSuccess: true,
        });
    } else {
        return res.json({
            isSuccess: false,
        });
    }
}

export default withHandler({
    methods: ["POST"],
    handler: Handler,
});
