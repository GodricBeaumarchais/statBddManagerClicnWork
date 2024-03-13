import callClicnwork from '../api/clicNwork/dayRequest/callClicnwork';
import fromJsonTodata from '../utils/fromJsonTodata';
import recrutementService from './recrutement.service';
import dotenv from "dotenv";
dotenv.config();

async function updateRecrutementDatabaseWithApiData() {
    const totalRecruitments = await callClicnwork.getRecruitmentTotal();
    const batchSize = 100; // Exemple de taille de lot
    let currentBegin = 0;
    console.log(totalRecruitments);
    while (currentBegin < totalRecruitments) {
        const currentEnd = Math.min(currentBegin + batchSize, totalRecruitments);
        console.log(currentBegin, " / ", totalRecruitments);
        const rawData = await callClicnwork.getRecruitments(currentBegin, currentEnd);

        const recruitmentDataArray = rawData.map(jsonInput => fromJsonTodata.parseRecrutementData(jsonInput));

        const existingRecruitments = await recrutementService.getAllRecrutements();

        for (const recruitmentData of recruitmentDataArray) {
            const existingData = existingRecruitments.find(r => r.uid === recruitmentData.uid);
            
            if(recruitmentData.uidMainAgency == process.env.AGENCY_UID){
                console.log("update recruitments");
                if (existingData) {
                    await recrutementService.updateRecrutement(recruitmentData);
                } else {
                    await recrutementService.createRecrutement(recruitmentData);
                }
            }   
        }

        currentBegin = currentEnd;
    }
}

export default updateRecrutementDatabaseWithApiData;

//updateDatabaseWithApiData().catch(console.error);