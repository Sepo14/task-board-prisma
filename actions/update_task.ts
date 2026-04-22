"use server"

import { Status } from "@/src/generated/enums";
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";


export async function UpdateTask(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const icon = formData.get("icon") as string;
    const status = formData.get("status") as Status;
    const taskId = Number(formData.get("idTask"));

    await prisma.task.update({
        where: { idTask: taskId },
        data: {title:title, description:description, icon:icon, status:status}
    })

    revalidatePath('/')
}