
import Image from "next/image";
import SlidingForm from "@/components/sliding_form";
import EventButton from "@/components/event_button";
import InitCookie from "@/components/cookies_init";
import { GetTasks } from "@/actions/get_tasks";
import { cookies } from "next/headers";




export default async function Home() {

  const cookieStore = await cookies()
  const idUser = cookieStore.get("id")?.value
  const tasks = await GetTasks(idUser)


  return (
    <>
      <InitCookie />
      <main className="flex relative min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-50">
        <div className="flex pt-16 items-center gap-4 mb-5">
          <Image src={"/logo.svg"} alt="logo" width={50} height={50}></Image>
          <h2 className="text-4xl">My Task Board</h2>
          <Image src={'/Edit_duotone.svg'} alt='edit' width={30} height={30} />
        </div>
        {tasks.map((task) => (
          <EventButton task={task} key={task.idTask} />
        ))}
        
        <SlidingForm />
      </main>
    </>
  );
}
