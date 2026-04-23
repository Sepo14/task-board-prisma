/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import Form from "next/form";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UpdateTask } from "@/actions/update_task";
import DeleteButton from "./delete_button";
import { Status } from "@/src/generated/enums";

type EditTaskFormProps = {
    closeForm: () => void;
    task: {
        title: string;
        description: string | null;
        icon: string;
        status: Status;
        authorId: string;
        idTask: number;
    };
};

export default function EditTaskForm({ closeForm, task }: EditTaskFormProps) {

    async function handleSubmit(formData: FormData) {
        await UpdateTask(formData);
        closeForm();
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [icon, setIcon] = useState("")
    const [state, setState] = useState("")
    const [id, setId] = useState(0)

    useEffect(() => {
        if (task.title) {
            setTitle(task.title);
        }
        if (task.description) {
            setDescription(task.description);
        }
        if (task.icon) {
            setIcon(task.icon);
        }
        if (task.status) {
            setState(task.status);
        }
        if (task.idTask) {
            setId(task.idTask);
        }
    }, [task]);


    return (
        <>
            <Form action={handleSubmit} className="flex flex-col h-full justify-between overflow-auto">
                <div className="flex flex-col items-start gap-1">
                    <label htmlFor="title" className="font-medium">Task name</label>
                    <input type="text" id="title" name="title" placeholder="Task name" value={title} onChange={(event) => setTitle(event.target.value)} className="border rounded-sm p-2 w-full" />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} className="border rounded-sm p-2 h-40 w-full"></textarea>
                    <input type="hidden" name="idTask" value={id} />
                    <p>Icon</p>
                    <div className="flex gap-2">
                        <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                            <input type="radio" name="icon" id="icon1" value={'/joystick.svg'} checked={icon === "/joystick.svg"} onChange={(event) => setIcon(event.target.value)} className="hidden" />
                            <Image src={'/joystick.svg'} alt='Console' width={'25'} height={'25'} />
                        </label>
                        <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                            <input type="radio" name="icon" id="icon2" value={'online-learning.svg'} checked={icon === "online-learning.svg"} onChange={(event) => setIcon(event.target.value)} className="hidden" />
                            <Image src={'online-learning.svg'} alt='Study' width={'25'} height={'25'} />
                        </label>
                        <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                            <input type="radio" name="icon" id="icon3" value={'pingpong.svg'} checked={icon === "pingpong.svg"} onChange={(event) => setIcon(event.target.value)} className="hidden" />
                            <Image src={'pingpong.svg'} alt='Play' width={'25'} height={'25'} />
                        </label>
                        <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                            <input type="radio" name="icon" id="icon4" value={'weightlifting.svg'} checked={icon === "weightlifting.svg"} onChange={(event) => setIcon(event.target.value)} className="hidden" />
                            <Image src={'weightlifting.svg'} alt='Exercise' width={'25'} height={'25'} />
                        </label>
                        <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                            <input type="radio" name="icon" id="icon5" value={'ironing-board.svg'} checked={icon === "ironing-board.svg"} onChange={(event) => setIcon(event.target.value)} className="hidden" />
                            <Image src={'ironing-board.svg'} alt='Cleaning' width={'25'} height={'25'} />
                        </label>
                        <label className="cursor-pointer p-3 bg-zinc-400 rounded-xl has-checked:bg-(--color-1) hover:bg-(--color-1)">
                            <input type="radio" name="icon" id="icon6" value={'coffee-cup.svg'} checked={icon === "coffee-cup.svg"} onChange={(event) => setIcon(event.target.value)} className="hidden" />
                            <Image src={'coffee-cup.svg'} alt='Relax' width={'25'} height={'25'} />
                        </label>
                    </div>
                    <>Status</>
                    <div className="w-full columns-1 md:columns-2 mb-2">
                        <label className="border-2 border-zinc-400 rounded-2xl p-2 flex items-center gap-2 cursor-pointer hover:border-blue-600 justify-between has-checked:border-blue-600 mb-2">
                            <input type="radio" name="status" id="status1" className="hidden peer" value={"TODO"} checked={state === "TODO"} onChange={(event) => setState(event.target.value)} />
                            <Image src={'Time_atack_duotone.svg'} alt='to do' width={20} height={20} className="bg-(--color-1-dark) rounded-2xl p-3 w-fit" />
                            <p>In Progress</p>
                            <Image src={'Done_round.svg'} alt='done' width={20} height={20} className="peer-checked:bg-blue-600 peer-checked:visible rounded-full invisible" />
                        </label>
                        <label className="border-2 border-zinc-400 rounded-2xl p-2 flex items-center gap-2 cursor-pointer hover:border-blue-600 justify-between has-checked:border-blue-600 mb-2">
                            <input type="radio" name="status" id="status2" className="hidden peer" value={"WONT_DO"} checked={state === "WONT_DO"} onChange={(event) => setState(event.target.value)} />
                            <Image src={'close_ring_duotone.svg'} alt='to do' width={20} height={20} className="bg-(--color-3-dark) rounded-2xl p-3 w-fit" />
                            <p>Won&apos;t do</p>
                            <Image src={'Done_round.svg'} alt='done' width={20} height={20} className="peer-checked:bg-blue-600 peer-checked:visible rounded-full invisible" />
                        </label>
                        <label className="border-2  border-zinc-400 rounded-2xl p-2 flex items-center gap-2 cursor-pointer hover:border-blue-600 justify-between has-checked:border-blue-600 mb-2">
                            <input type="radio" name="status" id="status3" className="hidden peer" value={"COMPLETED"} checked={state === "COMPLETED"} onChange={(event) => setState(event.target.value)} />
                            <Image src={'Done_round_duotone.svg'} alt='to do' width={20} height={20} className="bg-(--color-4-dark) rounded-2xl p-3 w-fit" />
                            <p>Completed</p>
                            <Image src={'Done_round.svg'} alt='done' width={20} height={20} className="peer-checked:bg-blue-600 peer-checked:visible rounded-full invisible" />
                        </label>
                    </div>
                </div>
                <div className="flex relative self-end gap-6">

                    <DeleteButton idTask={id} />
                    
                    <button type="submit" className="flex items-center gap-2 bg-blue-600 px-6 py-2 rounded-full cursor-pointer text-white">
                        Save
                        <Image src={'Done_round.svg'} alt='submit' width={25} height={25} />
                    </button>

                </div>
            </Form>

        </>
    )
}