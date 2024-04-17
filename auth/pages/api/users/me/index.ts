import { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/prismaClient";

interface IResponse {
    isSuccess: boolean;
    [key: string]: any;
}

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    if (req.method === "GET") {
        // const profile = await client.user.findUnique({
        // })
    }
}
