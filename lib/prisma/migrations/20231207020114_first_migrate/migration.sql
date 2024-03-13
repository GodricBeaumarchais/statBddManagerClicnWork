-- CreateTable
CREATE TABLE "Recrutement" (
    "uid" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "primaryJob" TEXT NOT NULL,
    "primarySkills" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "yearsExperience" INTEGER NOT NULL,
    "geographicAddress" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "rateCode" TEXT NOT NULL,
    "contractType" TEXT NOT NULL,
    "educationLevel" TEXT NOT NULL,
    "workingMonth" INTEGER NOT NULL,
    "isActiveProposition" BOOLEAN NOT NULL DEFAULT false,
    "isVehiculed" BOOLEAN NOT NULL DEFAULT false,
    "isMobility" BOOLEAN NOT NULL DEFAULT false,
    "mobilityBonus" DOUBLE PRECISION NOT NULL,
    "isMonth13th" BOOLEAN NOT NULL DEFAULT false,
    "jobUrl" TEXT NOT NULL,
    "uidRecruiter" TEXT NOT NULL,
    "uidClient" TEXT NOT NULL,
    "uidClientContact" TEXT NOT NULL,
    "employementSlot" INTEGER NOT NULL,
    "companyDescription" TEXT NOT NULL,
    "jobSpecification" TEXT NOT NULL,
    "jobResponsability" TEXT NOT NULL,
    "jobProfile" TEXT NOT NULL,
    "jobMisc" TEXT NOT NULL,
    "reasonClosingRecruitment" TEXT NOT NULL,
    "modifiedDate" TIMESTAMP(3) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,
    "uidCreator" TEXT NOT NULL,
    "uidAgency" TEXT NOT NULL,
    "uidMainAgency" TEXT NOT NULL,

    CONSTRAINT "Recrutement_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "ActiveProposition" (
    "uid" TEXT NOT NULL,
    "uidAgency" TEXT NOT NULL,
    "uidMainAgency" TEXT NOT NULL,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "luidCandidate" TEXT[],
    "luidClientContact" TEXT[],
    "luidClientProposition" TEXT[],
    "messageContent" TEXT NOT NULL,
    "modifiedDate" TIMESTAMP(3) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,
    "uidCreator" TEXT NOT NULL,

    CONSTRAINT "ActiveProposition_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Client" (
    "uid" TEXT NOT NULL,
    "uidAgency" TEXT NOT NULL,
    "uidMainAgency" TEXT NOT NULL,
    "uidAgreement" TEXT NOT NULL,
    "geographicAddress" TEXT NOT NULL,
    "addressCity" TEXT NOT NULL,
    "luidClientActivityArea" TEXT[],
    "nafCode" TEXT NOT NULL,
    "textDescription" TEXT NOT NULL,
    "uidManager" TEXT NOT NULL,
    "lastClientStatus" TEXT NOT NULL,
    "linkedin_url" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "averageEtp" TEXT NOT NULL,
    "openJobs" TEXT NOT NULL,
    "isAgreement" TEXT NOT NULL,
    "activityArea" TEXT NOT NULL,
    "siretIdentifier" TEXT NOT NULL,
    "webSite" TEXT NOT NULL,
    "clientStatus" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "recruitmentInProgress" TEXT[],
    "isCreditInsurance" BOOLEAN NOT NULL DEFAULT false,
    "workforceCompany" TEXT NOT NULL,
    "jobSearch" TEXT[],
    "luidClientConcurrent" TEXT[],
    "luidClientContact" TEXT[],
    "uidActiveProposition" TEXT NOT NULL,
    "modifiedDate" TIMESTAMP(3) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,
    "uidCreator" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "ClientExchange" (
    "uid" TEXT NOT NULL,
    "uidAgency" TEXT NOT NULL,
    "uidMainAgency" TEXT NOT NULL,
    "uidCandidate" TEXT NOT NULL,
    "uidClient" TEXT NOT NULL,
    "uidClientContact" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "content" TEXT NOT NULL,
    "osExchangeType" TEXT NOT NULL,
    "uidEvents" TEXT NOT NULL,
    "osUserType" TEXT NOT NULL,
    "osNoteType" TEXT NOT NULL,
    "uidManager" TEXT NOT NULL,
    "uidCreator" TEXT NOT NULL,
    "modifiedDate" TIMESTAMP(3) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientExchange_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "uid" TEXT NOT NULL,
    "geoAddress" TEXT NOT NULL,
    "addressCity" TEXT NOT NULL,
    "addressCountry" TEXT NOT NULL,
    "addressStreet" TEXT NOT NULL,
    "uidAgency" TEXT NOT NULL,
    "uidMainAgency" TEXT NOT NULL,
    "uidSecondayAgency" TEXT[],
    "knowledgeRate" INTEGER NOT NULL,
    "uidCdtData" TEXT NOT NULL,
    "callBackDate" TIMESTAMP(3) NOT NULL,
    "birthDay" TIMESTAMP(3) NOT NULL,
    "dateToQualified" TIMESTAMP(3) NOT NULL,
    "dateAskUpdate" TIMESTAMP(3) NOT NULL,
    "lastSmsDate" TIMESTAMP(3) NOT NULL,
    "unsubscribeDate" TIMESTAMP(3) NOT NULL,
    "availabilityDate" TIMESTAMP(3) NOT NULL,
    "availabilityUpdateDate" TIMESTAMP(3) NOT NULL,
    "availabilityInformationDate" TIMESTAMP(3) NOT NULL,
    "drivingLicence" BOOLEAN NOT NULL,
    "uidCdtExchange" TEXT NOT NULL,
    "yearsExperience" INTEGER NOT NULL,
    "userMainRecruiter" TEXT NOT NULL,
    "luserSecondaryRecruiter" TEXT[],
    "isMobility" BOOLEAN NOT NULL,
    "uidCdtApplication" TEXT[],
    "uidCdtSkills" TEXT[],
    "uidCdtComputerSkills" TEXT[],
    "uidCdtProfesionalExperiences" TEXT[],
    "uidCdtEducation" TEXT[],
    "hobbies" TEXT[],
    "uidCdtLangage" TEXT[],
    "primaryJobLabel" TEXT NOT NULL,
    "primaryJobId" TEXT NOT NULL,
    "secondaryJobLabels" TEXT[],
    "secondaryJobIds" TEXT[],
    "desiredJobLabel" TEXT NOT NULL,
    "otherSkills" TEXT[],
    "uidCdtSoftSkills" TEXT[],
    "registrationNumber" INTEGER NOT NULL,
    "fisrtName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "hasPersonalVehicle" BOOLEAN NOT NULL,
    "mobilePhone" TEXT NOT NULL,
    "osStatus" TEXT NOT NULL,
    "yearlyRate" TEXT NOT NULL,
    "hourlyRate" TEXT NOT NULL,
    "monthlyRate" TEXT NOT NULL,
    "osProfileType" TEXT NOT NULL,
    "desiredGeoAddress" TEXT NOT NULL,
    "uidCreator" TEXT NOT NULL,
    "modifiedDate" TIMESTAMP(3) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recrutement_uid_key" ON "Recrutement"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveProposition_uid_key" ON "ActiveProposition"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Client_uid_key" ON "Client"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "ClientExchange_uid_key" ON "ClientExchange"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_uid_key" ON "Candidate"("uid");
