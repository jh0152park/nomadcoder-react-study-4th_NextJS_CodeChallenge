import { NextApiRequest, NextApiResponse } from "next";
type TMethod = "GET" | "POST" | "PUT" | "DELETE";
type THandler = (req: NextApiRequest, res: NextApiResponse) => void;

interface IResponseType {
    isSuccess: boolean;
    [key: string]: any;
}

interface IConfigProps {
    methods: TMethod[];
    handler: THandler;
}

export default function withHandler({ methods, handler }: IConfigProps) {
    return async function (
        req: NextApiRequest,
        res: NextApiResponse
    ): Promise<any> {
        if (req.method && !methods.includes(req.method as any)) {
            return res.status(405).end();
        }

        try {
            await handler(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error: error,
            });
        }
    };
}
