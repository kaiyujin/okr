// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Period, PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // call functions by method
    switch (req.method) {
      case "GET":
        return handleRead(req, res).finally(
            await prisma.$disconnect()
        )
      default:
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    /**
    const funcMap = {
      GET: handleRead,
      POST: handleRead,
    };
    const method = req.method ?? "GET"
    const func = funcMap[method];

    return func(req, res)
        .catch((e) => {
            res.status(400).end("prisma client throws an exception.");
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
     **/
};

/**
 * READ
 * @param req
 * @param res
 */
const handleRead = async (
    req: NextApiRequest,
    res: NextApiResponse<Period[]>
) => {
    // prisma - READ
    const period = await prisma.period.findMany({
        orderBy: {
          periodId: "asc",
        },
    });
    res.json(period);
};
