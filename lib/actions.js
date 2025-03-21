'use server'
import { PrismaClient } from '@prisma/client';
import { transactionSchema } from '../lib/schemas'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient()

export const saveTransaction = async (formData) => {

    const result = transactionSchema.safeParse(formData);

    if (result.success) {
        await prisma.transaction.create({
            data: {
                ...result.data
            }
        })

        revalidatePath("/")
        redirect("/")
    } else if (result.error) {
        return { success: false, error: result.error.format() }
    }
}

export const getTransactionById = async (id) => {

    const transaction = await prisma.transaction.findUnique({
        where: {
            id
        }
    })

    return { ...transaction }
}