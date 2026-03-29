import prisma from "@/lib/prisma";

export async function GetTasks(user:string | undefined) {
    const tasks = await prisma.task.findMany({where: {authorId : user}})
    return tasks
}