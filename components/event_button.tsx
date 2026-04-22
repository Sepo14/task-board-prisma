"use client"
import Image from "next/image";
import { useState } from "react";
import EditTaskForm from "./edit_form";
import { Task } from "@/src/generated/client";
import { Status } from "@/src/generated/client";

export default function EventButton(task: { task: Task }) {

    const [isOpen, setIsOpen] = useState(false)

    const icons = {
        TODO: "Time_atack_duotone.svg",
        WONT_DO: "close_ring_duotone.svg",
        COMPLETED: "Done_round_duotone.svg",
    };

    return (
        <>
            {/* boton formulario */}
            <div className="w-9/10 sm:w-1/2 lg:w-1/3 mb-5">
                <div className={`p-3 rounded-2xl flex items-center justify-between gap-5 ${task.task.status === "TODO" ? "bg-(--color-1)" : ""} ${task.task.status === "WONT_DO" ? "bg-(--color-3)" : ""} ${task.task.status === "COMPLETED" ? "bg-(--color-4)" : ""} cursor-pointer`} onClick={() => setIsOpen(true)}>
                    <div className="flex items-center gap-5 overflow-hidden">
                        <div className="bg-white rounded-2xl p-3">
                            <Image src={`${task.task.icon}`} alt='add task' width={30} height={30} />
                        </div>
                        <p className="font-bold truncate max-w-7/10">{task.task.title}</p>
                    </div>
                    <div className={`${task.task.status === "TODO" ? "bg-(--color-1-dark)" : ""} ${task.task.status === "WONT_DO" ? "bg-(--color-3-dark)" : ""} ${task.task.status === "COMPLETED" ? "bg-(--color-4-dark)" : ""} rounded-2xl p-3`}>
                        <Image src={`${icons[task.task.status as Status]}`} alt='add task' width={30} height={30} />
                    </div>
                </div>
            </div>
            <div className={`absolute w-full bg-gray-600 h-full ${isOpen ? "opacity-70" : "opacity-0 -z-10"} transform duration-500`} onClick={() => setIsOpen(false)}>

            </div>
            {/* Formulario deslizante */}
            <div className={`absolute flex flex-col top-5 ${isOpen ? "translate-x-0 right-5" : "translate-x-full right-0"} transform transition-transform duration-500 bg-zinc-50 p-5 rounded-2xl h-9/10 w-9/10 sm:w-3/4 md:w-2/4 xl:w-1/3`}>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl">Task details</h2>
                    <div className="bg-zinc-50 rounded-2xl p-3 w-fit cursor-pointer" onClick={() => setIsOpen(false)}>
                        <Image src={'/close_ring_duotone-1.svg'} alt='close window' width={20} height={20} />
                    </div>
                </div>
                <EditTaskForm closeForm={() => setIsOpen(false)} task={task.task}/>
            </div>
        </>
    )
}