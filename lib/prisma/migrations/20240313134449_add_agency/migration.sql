-- CreateTable
CREATE TABLE "MainAgency" (
    "uid" TEXT NOT NULL,
    "uidAgency" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "webSite" TEXT NOT NULL,
    "dataOptions" BOOLEAN NOT NULL,
    "bddLink" TEXT NOT NULL,
    "modifiedDate" TIMESTAMP(3) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,
    "uidCreator" TEXT NOT NULL,

    CONSTRAINT "MainAgency_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "MainAgency_uid_key" ON "MainAgency"("uid");
