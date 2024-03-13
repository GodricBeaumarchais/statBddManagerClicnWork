"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDateOrDefault(dateString) {
    return dateString ? new Date(dateString) : new Date();
}
function extractText(jsonInput) {
    const jsonData = JSON.parse(jsonInput);
    if (jsonData == null) {
        return "";
    }
    else if (!jsonData.blocks) {
        return "";
    }
    else if (!jsonData.blocks.text) {
        return "";
    }
    return encodeURIComponent(jsonData.blocks.text);
}
function extractBoolean(input) {
    if (input === "true") {
        return true;
    }
    else {
        return false;
    }
}
class fromJsonToData {
    parseClientData(jsonInput) {
        const jsonData = JSON.parse(jsonInput);
        const data = {
            uid: jsonData.uid || "",
            uidAgency: jsonData.uidAgency || "",
            uidMainAgency: jsonData.uidMainAgency || "",
            uidAgreement: jsonData.uidAgreement || "",
            geographicAddress: jsonData.geographicAddress || "",
            addressCity: jsonData.addressCity || "",
            luidClientActivityArea: jsonData.luidClientActivityArea || [],
            nafCode: jsonData.nafCode || "",
            textDescription: jsonData.textDescription || "",
            uidManager: jsonData.uidManager || "",
            lastClientStatus: jsonData.lastClientStatus || "",
            linkedin_url: jsonData.linkedin_url || "",
            companyName: jsonData.companyName || "",
            averageEtp: jsonData.averageEtp || "",
            openJobs: jsonData.openJobs || "",
            isAgreement: jsonData.isAgreement || "",
            activityArea: jsonData.activityArea || "",
            siretIdentifier: jsonData.siretIdentifier || "",
            webSite: jsonData.webSite || "",
            clientStatus: jsonData.clientStatus || "",
            phone: jsonData.phone || "",
            recruitmentInProgress: jsonData.recruitmentInProgress || [],
            isCreditInsurance: extractBoolean(jsonData.isCreditInsurance),
            workforceCompany: jsonData.workforceCompany || "",
            jobSearch: jsonData.jobSearch || [],
            luidClientConcurrent: jsonData.luidClientConcurrent || [],
            luidClientContact: jsonData.luidClientContact || [],
            uidActiveProposition: jsonData.uidActiveProposition || "",
            modifiedDate: getDateOrDefault(jsonData.modifiedDate),
            createdDate: getDateOrDefault(jsonData.createdDate),
            uidCreator: jsonData.uidCreator || ""
        };
        return data;
    }
    parseCandidateData(jsonInput) {
        const jsonData = JSON.parse(jsonInput);
        return {
            uid: jsonData.uid || "",
            geoAddress: jsonData.geoAddress || "",
            addressCity: jsonData.addressCity || "",
            addressCountry: jsonData.addressCountry || "",
            addressStreet: jsonData.addressStreet || "",
            uidAgency: jsonData.uidAgency || "",
            uidMainAgency: jsonData.uidMainAgency || "",
            uidSecondayAgency: jsonData.uidSecondayAgency || [],
            knowledgeRate: parseInt(jsonData.knowledgeRate) || 0,
            uidCdtData: jsonData.uidCdtData || "",
            callBackDate: getDateOrDefault(jsonData.callBackDate),
            birthDay: getDateOrDefault(jsonData.birthDay),
            dateToQualified: getDateOrDefault(jsonData.dateToQualified),
            dateAskUpdate: getDateOrDefault(jsonData.dateAskUpdate),
            lastSmsDate: getDateOrDefault(jsonData.lastSmsDate),
            unsubscribeDate: getDateOrDefault(jsonData.unsubscribeDate),
            availabilityDate: getDateOrDefault(jsonData.availabilityDate),
            availabilityUpdateDate: getDateOrDefault(jsonData.availabilityUpdateDate),
            availabilityInformationDate: getDateOrDefault(jsonData.availabilityInformationDate),
            drivingLicence: extractBoolean(jsonData.drivingLicence),
            uidCdtExchange: jsonData.uidCdtExchange || "",
            yearsExperience: parseInt(jsonData.yearsExperience) || 0,
            userMainRecruiter: jsonData.userMainRecruiter || "",
            luserSecondaryRecruiter: jsonData.luserSecondaryRecruiter || [],
            isMobility: extractBoolean(jsonData.isMobility),
            uidCdtApplication: jsonData.uidCdtApplication || [],
            uidCdtSkills: jsonData.uidCdtSkills || [],
            uidCdtComputerSkills: jsonData.uidCdtComputerSkills || [],
            uidCdtProfesionalExperiences: jsonData.uidCdtProfesionalExperiences || [],
            uidCdtEducation: jsonData.uidCdtEducation || [],
            hobbies: jsonData.hobbies || [],
            uidCdtLangage: jsonData.uidCdtLangage || [],
            primaryJobLabel: jsonData.primaryJobLabel || "",
            primaryJobId: jsonData.primaryJobId || "",
            secondaryJobLabels: jsonData.secondaryJobLabels || [],
            secondaryJobIds: jsonData.secondaryJobIds || [],
            desiredJobLabel: jsonData.desiredJobLabel || "",
            otherSkills: jsonData.otherSkills || [],
            uidCdtSoftSkills: jsonData.uidCdtSoftSkills || [],
            registrationNumber: parseInt(jsonData.registrationNumber) || 0,
            fisrtName: jsonData.fisrtName || "",
            lastName: jsonData.lastName || "",
            hasPersonalVehicle: extractBoolean(jsonData.hasPersonalVehicle),
            mobilePhone: jsonData.mobilePhone || "",
            osStatus: jsonData.osStatus || "",
            yearlyRate: jsonData.yearlyRate || "",
            hourlyRate: jsonData.hourlyRate || "",
            monthlyRate: jsonData.monthlyRate || "",
            osProfileType: jsonData.osProfileType || "",
            desiredGeoAddress: jsonData.desiredGeoAddress || "",
            uidCreator: jsonData.uidCreator || "",
            modifiedDate: getDateOrDefault(jsonData.modifiedDate),
            createdDate: getDateOrDefault(jsonData.createdDate)
        };
    }
    parseClientExchangeData(jsonInput) {
        const jsonData = JSON.parse(jsonInput);
        return {
            uid: jsonData.uid || "",
            uidAgency: jsonData.uidAgency || "",
            uidMainAgency: jsonData.uidMainAgency || "",
            uidCandidate: jsonData.uidCandidate || "",
            uidClient: jsonData.uidClient || "",
            uidClientContact: jsonData.uidClientContact || [],
            content: jsonData.content || "",
            osExchangeType: jsonData.osExchangeType || "",
            uidEvents: jsonData.uidEvents || "",
            osUserType: jsonData.osUserType || "",
            osNoteType: jsonData.osNoteType || "",
            uidManager: jsonData.uidManager || "",
            uidCreator: jsonData.uidCreator || "",
            modifiedDate: getDateOrDefault(jsonData.modifiedDate),
            createdDate: getDateOrDefault(jsonData.createdDate),
        };
    }
    parseActivePropositionData(jsonInput) {
        const jsonData = JSON.parse(jsonInput);
        let isClosed = false;
        if (jsonData.isClosed === "true") {
            isClosed = true;
        }
        return {
            uid: jsonData.uid || "",
            uidAgency: jsonData.uidAgency || "",
            uidMainAgency: jsonData.uidMainAgency || "",
            isClosed: isClosed,
            luidCandidate: jsonData.luidCandidate || [],
            luidClientContact: jsonData.luidClientContact || [],
            luidClientProposition: jsonData.luidClientProposition || [],
            messageContent: jsonData.messageContent || "",
            modifiedDate: getDateOrDefault(jsonData.modifiedDate),
            createdDate: getDateOrDefault(jsonData.createdDate),
            uidCreator: jsonData.uidCreator || ""
        };
    }
    parseRecrutementData(jsonInput) {
        const jsonData = JSON.parse(jsonInput);
        const jobMisc = extractText(JSON.stringify(jsonData.jobMisc));
        const jobResponsability = extractText(JSON.stringify(jsonData.jobResponsability));
        const jobSpecification = extractText(JSON.stringify(jsonData.jobSpecification));
        const jobProfile = extractText(JSON.stringify(jsonData.jobProfile));
        const companyDescription = extractText(JSON.stringify(jsonData.companyDescription));
        return {
            uid: jsonData.uid || "",
            status: jsonData.status || "",
            primaryJob: jsonData.primaryJob || "",
            primarySkills: jsonData.primarySkills || "",
            startDate: getDateOrDefault(jsonData.startDate),
            endDate: getDateOrDefault(jsonData.endDate),
            yearsExperience: parseInt(jsonData.yearsExperience) || 0,
            geographicAddress: jsonData.geographicAddress || "",
            rate: parseInt(jsonData.rate) || 0,
            rateCode: jsonData.rateCode || "",
            contractType: jsonData.contractType || "",
            educationLevel: jsonData.educationLevel || "",
            workingMonth: parseInt(jsonData.workingMonth) || 0,
            isActiveProposition: extractBoolean(jsonData.isActiveProposition),
            isVehiculed: extractBoolean(jsonData.isVehiculed),
            isMobility: extractBoolean(jsonData.isMobility),
            mobilityBonus: parseInt(jsonData.mobilityBonus) || 0,
            isMonth13th: extractBoolean(jsonData.isMonth13th),
            jobUrl: jsonData.jobUrl || "",
            uidRecruiter: jsonData.uidRecruiter || "",
            uidClient: jsonData.uidClient || "",
            uidClientContact: jsonData.uidClientContact || "",
            employementSlot: parseInt(jsonData.employementSlot) || 0,
            companyDescription: companyDescription,
            jobSpecification: jobSpecification,
            jobResponsability: jobResponsability,
            jobProfile: jobProfile,
            jobMisc: jobMisc,
            reasonClosingRecruitment: jsonData.reasonClosingRecruitment || "",
            modifiedDate: getDateOrDefault(jsonData.modifiedDate),
            createdDate: getDateOrDefault(jsonData.createdDate),
            uidCreator: jsonData.uidCreator || "",
            uidAgency: jsonData.uidAgency || "",
            uidMainAgency: jsonData.uidMainAgency || ""
        };
    }
}
exports.default = new fromJsonToData();
//# sourceMappingURL=fromJsonTodata.js.map