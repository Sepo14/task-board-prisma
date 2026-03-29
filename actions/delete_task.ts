"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function DeleteTask(idTask : number) {
    
    await prisma.task.delete({where: {idTask :idTask}})
    revalidatePath('/')
}