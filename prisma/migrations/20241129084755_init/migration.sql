/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `game` MODIFY `downloads` INTEGER NOT NULL DEFAULT 0,
    MODIFY `views` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `user`;
