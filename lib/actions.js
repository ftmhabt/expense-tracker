'use server'
import { PrismaClient } from '@prisma/client';
import { transactionSchema } from '../lib/schemas'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient()

export const saveTransaction = async (formData, id) => {

    const result = transactionSchema.safeParse(formData);

    if (result.error) {
        return { success: false, error: result.error.format() }
    }

    if (id) {
        await prisma.transaction.update({
            where: {
                id
            },
            data: {
                ...result.data
            }
        })

    } else {
        await prisma.transaction.create({
            data: {
                ...result.data
            }
        })
    }


    revalidatePath("/")
    redirect("/")
}

export const getTransactionById = async (id) => {

    const transaction = await prisma.transaction.findUnique({
        where: {
            id
        }
    })

    return { ...transaction }
}

export const deleteTransactionById = async (id) => {

    const result = await prisma.transaction.delete({
        where: {
            id
        }
    })
    if (result.error) {
        return { success: false, error: result.error.format() }
    }

    if (result) {
        revalidatePath("/")
    }

}