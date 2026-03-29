import prisma from "@/lib/prisma";

export default async function CreateUser() {

    const user = await prisma.user.create({
        data: {},
    });
    return user
}