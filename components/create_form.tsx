"use client"

import Form from "next/form";
import Image from "next/image";
import { createTask } from "@/actions/create_task";

type closeForm = {
    closeForm: () => void
}

export default function CreateUserForm({ closeForm }: closeForm) {

    async function handleSubmit(formData: FormData) {
        await createTask(formData);
        closeForm();
    }


    return (
        <Form action={handleSubmit} className="flex flex-col h-full justify-between">
            <div className="flex flex-col items-start gap-1">
                <label htmlFor="title" className="font-medium">Task name</label>
                <input type="text" id="title" name="title" placeholder="Task name" className="border rounded-sm p-2 w-full" />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder="Description" className="border rounded-sm p-2 h-40 w-full"></textarea>
                <p>Icon</p>
                <div className="flex gap-2">
                    <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                        <input type="radio" name="icon" id="icon1" value={'/joystick.svg'} className="hidden" />
                        <Image src={'/joystick.svg'} alt='Console' width={'25'} height={'25'} />
                    </label>
                    <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                        <input type="radio" name="icon" id="icon2" value={'online-learning.svg'} className="hidden" />
                        <Image src={'online-learning.svg'} alt='Study' width={'25'} height={'25'} />
                    </label>
                    <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                        <input type="radio" name="icon" id="icon3" value={'pingpong.svg'} className="hidden" />
                        <Image src={'pingpong.svg'} alt='Play' width={'25'} height={'25'} />
                    </label>
                    <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                        <input type="radio" name="icon" id="icon4" value={'weightlifting.svg'} className="hidden" />
                        <Image src={'weightlifting.svg'} alt='Exercise' width={'25'} height={'25'} />
                    </label>
                    <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                        <input type="radio" name="icon" id="icon5" value={'ironing-board.svg'} className="hidden" />
                        <Image src={'ironing-board.svg'} alt='Cleaning' width={'25'} height={'25'} />
                    </label>
                    <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                        <input type="radio" name="icon" id="icon6" value={'coffee-cup.svg'} className="hidden" />
                        <Image src={'coffee-cup.svg'} alt='Relax' width={'25'} height={'25'} />
                    </label>
                </div>
            </div>
            <div className="flex relative self-end gap-6">
                <button type="submit" value="Save" className="flex items-center gap-2 bg-blue-600 px-6 py-2 rounded-full cursor-pointer text-white">
                    Save
                    <Image src={'Done_round.svg'} alt='submit' width={25} height={25} />
                </button>

            </div>
        </Form>
    )
}