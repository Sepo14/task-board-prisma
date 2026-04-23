"use client"

import { DeleteTask } from "@/actions/delete_task"
import Image from "next/image"

export default function DeleteButton({idTask}:{idTask: number}) {
    return (
        <button type="button" onClick={() => DeleteTask(idTask)} className="flex right-40 gap-2 bg-gray-400 px-6 py-2 rounded-full cursor-pointer text-white">
            Delete
            <Image src={'Trash.svg'} alt='submit' width={25} height={25} />
        </button>
    )
}
