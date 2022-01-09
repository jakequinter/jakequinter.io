/*
  Warnings:

  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Food`;

-- CreateTable
CREATE TABLE `food` (
    `id` VARCHAR(191) NOT NULL,
    `restaurant_name` VARCHAR(255) NOT NULL,
    `jake_rating` FLOAT NOT NULL,
    `jen_rating` FLOAT NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
