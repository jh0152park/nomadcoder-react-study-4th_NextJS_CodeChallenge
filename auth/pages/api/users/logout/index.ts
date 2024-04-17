import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function hanlder(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getIronSession(req, res, {
        cookieName: "registered-user",
        password: process.env.COOKEI_PASSWORD!,
    });
    session.destroy();

    return res.status(200).json({
        isSuccess: true,
        message: "session destroy done",
    });
}
