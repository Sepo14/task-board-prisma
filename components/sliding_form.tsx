"use client"
import Image from "next/image";
import CreateUserForm from "./create_form";
import { useState } from "react";

export default function SlidingForm() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        {/* boton formulario */}
        <div className="w-9/10 sm:w-1/2 lg:w-1/3 mb-5">
            <div className="bg-(--color-1-soft) p-3 rounded-2xl flex items-center gap-5 cursor-pointer" onClick={()=> setIsOpen(true)}>
              <div className="bg-(--color-1-dark) rounded-2xl p-3 w-fit">
                <Image src={'/Add_round_duotone.svg'} alt='add task' width={30} height={30}/>
              </div>
              <p className="font-bold">Add new task</p>
            </div>
          </div>
        <div className={`absolute w-full bg-gray-600 h-full ${isOpen ? "opacity-70": "opacity-0 -z-10"} transform duration-500`} onClick={() => setIsOpen(false)}>
        
        </div>
        {/* Formulario deslizante */}
        <div className={`absolute flex flex-col top-5 ${isOpen ? "translate-x-0 right-5" : "translate-x-full right-0"} transform transition-transform duration-500 bg-zinc-50 p-5 rounded-2xl h-9/10 w-9/10 sm:w-3/4 md:w-2/4 lg:w-1/3`}>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl">Task details</h2>
                <div className="bg-zinc-50 rounded-2xl p-3 w-fit" onClick={() => setIsOpen(false)}>
                    <Image src={'/close_ring_duotone-1.svg'} alt='close window' width={20} height={20} />
                </div>
            </div>
            <CreateUserForm closeForm={() => setIsOpen(false)}></CreateUserForm>
        </div>
        </>
    )
}