-- CreateEnum
CREATE TYPE "Status" AS ENUM ('TODO', 'WONT_DO', 'COMPLETED');

-- CreateTable
CREATE TABLE "Task" (
    "title" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT DEFAULT 'coffee-cup.svg',
    "status" "Status" DEFAULT 'TODO',
    "authorId" TEXT NOT NULL,
    "idTask" SERIAL NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("idTask")
);

-- CreateTable
CREATE TABLE "User" (
    "idUser" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;
