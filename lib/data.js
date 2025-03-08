import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTransaction = async () => {
    try {
        const transactions = await prisma.transaction.findMany({
            orderBy: {
                date: 'desc'
            }
        })

        return transactions;
    } catch (error) {
        console.error({ error })
    }
}