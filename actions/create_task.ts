"use server";

import { Status } from "@/src/generated/enums";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createTask(formData: FormData) {

    const cookieStore = await cookies()

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const icon = formData.get("icon") as string;
    const status = formData.get("status") as Status;
    const userId = cookieStore.get("id")?.value as string;

    await prisma.task.create({
        data: {
            title: title,
            description: description,
            ...(icon ? { icon } : {}),
            ...(status ? { status } : {}),
            User: { connect: { idUser: userId } },
        },

    });
    revalidatePath('/')
}