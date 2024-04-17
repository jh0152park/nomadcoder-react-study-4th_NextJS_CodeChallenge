import client from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

interface IResponse {
    isSuccess: boolean;
    [key: string]: any;
}

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    if (req.method === "GET") {
        // const profile = await client.user.findUnique({
        // })
    } else if (req.method === "POST") {
        // const user = req.sess;
    }
}
