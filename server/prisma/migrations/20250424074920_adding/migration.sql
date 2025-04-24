/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Userid` on the `User` table. All the data in the column will be lost.
  - The required column `userId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "Userid",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "email" DROP DEFAULT,
ALTER COLUMN "isActive" SET DEFAULT true,
ALTER COLUMN "password" DROP DEFAULT,
ALTER COLUMN "role" DROP DEFAULT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");

-- CreateTable
CREATE TABLE "Admin" (
    "adminId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("adminId")
);

-- CreateTable
CREATE TABLE "Address" (
    "addressId" TEXT NOT NULL,
    "addressLine" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("addressId")
);

-- CreateTable
CREATE TABLE "Hall" (
    "hallId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageURLs" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,

    CONSTRAINT "Hall_pkey" PRIMARY KEY ("hallId")
);

-- CreateTable
CREATE TABLE "Booking" (
    "bookingId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "days" INTEGER NOT NULL,
    "bookingDetails" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "guests" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "hallId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("bookingId")
);

-- CreateTable
CREATE TABLE "Review" (
    "reviewId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "hallId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewId")
);

-- CreateTable
CREATE TABLE "Chat" (
    "chatId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("chatId")
);

-- CreateTable
CREATE TABLE "Message" (
    "messageId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatId" TEXT NOT NULL,
    "fromId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("messageId")
);

-- CreateTable
CREATE TABLE "Amenity" (
    "amenityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Amenity_pkey" PRIMARY KEY ("amenityId")
);

-- CreateTable
CREATE TABLE "AmenitiesHall" (
    "hallId" TEXT NOT NULL,
    "amenityId" TEXT NOT NULL,

    CONSTRAINT "AmenitiesHall_pkey" PRIMARY KEY ("hallId","amenityId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Hall" ADD CONSTRAINT "Hall_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hall" ADD CONSTRAINT "Hall_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("addressId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("hallId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("hallId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("chatId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmenitiesHall" ADD CONSTRAINT "AmenitiesHall_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("hallId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmenitiesHall" ADD CONSTRAINT "AmenitiesHall_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "Amenity"("amenityId") ON DELETE RESTRICT ON UPDATE CASCADE;
