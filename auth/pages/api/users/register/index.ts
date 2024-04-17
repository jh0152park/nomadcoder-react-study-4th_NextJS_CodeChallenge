import withHandler from "@/lib/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../lib/prismaClient";

interface IResponse {
    isSuccess: boolean;
    [key: string]: any;
}

async function Handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    const { username, email, password } = req.body;

    const user = await client.user.upsert({
        where: {
            email: email,
        },
        create: {
            username: username,
            email: email,
            password: password,
        },
        update: {
            // nothing to do
        },
    });

    if (user) {
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
