import { Interface } from "readline";

export interface RecrutementData {
    uid: string;
    status: string;
    primaryJob: string;
    primarySkills: string;
    startDate: Date;
    endDate: Date;
    yearsExperience: number;
    geographicAddress: string;
    rate: number;
    rateCode: string;
    contractType: string;
    educationLevel: string;
    workingMonth: number;
    isActiveProposition: boolean;
    isVehiculed: boolean;
    isMobility: boolean;
    mobilityBonus: number;
    isMonth13th: boolean;
    jobUrl: string;
    uidRecruiter: string;
    uidClient: string;
    uidClientContact: string;
    employementSlot: number;
    companyDescription: string;
    jobSpecification: string;
    jobResponsability: string;
    jobProfile: string;
    jobMisc: string;
    reasonClosingRecruitment: string;
    modifiedDate: Date;
    createdDate: Date;
    uidCreator: string;
    uidAgency: string;
    uidMainAgency: string;
}

export interface ClientData {
    uid: string;
    uidAgency: string;
    uidMainAgency: string;
    uidAgreement: string;
    geographicAddress: string;
    addressCity: string;
    luidClientActivityArea: string[];
    nafCode: string;
    textDescription: string;
    uidManager: string;
    lastClientStatus: string;
    linkedin_url: string;
    companyName: string;
    averageEtp: string;
    openJobs: string;
    isAgreement: string;
    activityArea: string;
    siretIdentifier: string;
    webSite: string;
    clientStatus: string;
    phone: string;
    recruitmentInProgress: string[];
    isCreditInsurance: boolean;
    workforceCompany: string;
    jobSearch: string[];
    luidClientConcurrent: string[];
    luidClientContact: string[];
    uidActiveProposition: string;
    modifiedDate: Date;
    createdDate: Date;
    uidCreator: string;
}



export interface ClientExchangeData {
    uid: string;
    uidAgency: string;
    uidMainAgency: string;
    uidCandidate: string;
    uidClient: string;
    uidClientContact: string[];
    content: string;
    osExchangeType: string;
    uidEvents: string;
    osUserType: string;
    osNoteType: string;
    uidManager: string;
    uidCreator: string;
    modifiedDate: Date;
    createdDate: Date;
}

export interface ActivePropositionData {
    uid: string;
    uidAgency: string;
    uidMainAgency: string;
    isClosed: boolean;
    luidCandidate: string[];
    luidClientContact: string[];
    luidClientProposition: string[];
    messageContent: string;
    modifiedDate: Date;
    createdDate: Date;
    uidCreator: string;
}

export interface CandidateData {
    uid: string,
    geoAddress: string,
    addressCity: string,
    addressCountry: string,
    addressStreet: string,
    uidAgency: string,
    uidMainAgency: string,
    uidSecondayAgency: string[],
    knowledgeRate: number,
    uidCdtData: string,
    callBackDate: Date,
    birthDay: Date,
    dateToQualified: Date,
    dateAskUpdate: Date,
    lastSmsDate: Date,
    unsubscribeDate: Date,
    availabilityDate: Date,
    availabilityUpdateDate: Date,
    availabilityInformationDate: Date,
    drivingLicence: boolean,
    uidCdtExchange: string,
    yearsExperience: number,
    userMainRecruiter: string,
    luserSecondaryRecruiter: string[],
    isMobility: boolean,
    uidCdtApplication: string[],
    uidCdtSkills: string[],
    uidCdtComputerSkills: string[],
    uidCdtProfesionalExperiences: string[],
    uidCdtEducation: string[],
    hobbies: string[],
    uidCdtLangage: string[],
    primaryJobLabel: string,
    primaryJobId: string,
    secondaryJobLabels: string[],
    secondaryJobIds: string[],
    desiredJobLabel: string,
    otherSkills: string[],
    uidCdtSoftSkills: string[],
    registrationNumber: number,
    fisrtName: string,
    lastName: string,
    hasPersonalVehicle: boolean,
    mobilePhone: string,
    osStatus: string,
    yearlyRate: string,
    hourlyRate: string,
    monthlyRate: string,
    osProfileType: string,
    desiredGeoAddress: string,
    uidCreator: string,
    modifiedDate: Date,
    createdDate: Date

}

export interface FormatErrorData {
    id: number;
    data: string;
}

export interface MainAgencyData {
    uid: string,
    uidAgency: string,
    name: string,
    address: string,
    phone: string,
    email: string,
    webSite: string,
    dataOptions: boolean,
    bddLink: string,
    modifiedDate: Date,
    createdDate: Date,
    uidCreator: string,
}