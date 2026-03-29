"use server"

import { cookies } from "next/headers"
import CreateUser from "./create_user_launch"

export async function CreateCookie(){

    const cookieStore = await cookies()
    if(!cookieStore.has("id")){
        const user = await CreateUser()
        cookieStore.set("id" , user.idUser , {maxAge: 60*60*24*30})
    }
    // console.log(cookieStore.get("id")?.value)
}