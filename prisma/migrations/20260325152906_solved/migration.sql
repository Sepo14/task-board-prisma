/*
  Warnings:

  - Made the column `icon` on table `Task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "icon" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;
