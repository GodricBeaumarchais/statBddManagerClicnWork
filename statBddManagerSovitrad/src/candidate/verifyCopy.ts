import callClicnwork from "../api/clicNwork/dayRequest/callClicnwork";
import fromJsonTodata from "../utils/fromJsonTodata";
import candidateService from "./candidate.service";

async function updateCandidateDatabaseWithApiData() {
    console.log("updateCandidateDatabaseWithApiData");
    const totalCandidates = await callClicnwork.getCandidateTotal();
    const batchSize = 100; // Exemple de taille de lot
    let currentBegin = 0;
    console.log(totalCandidates);
    while (currentBegin < totalCandidates) {
        const currentEnd = Math.min(currentBegin + batchSize, totalCandidates);
        console.log(currentBegin, " / ", totalCandidates);
        const rawData = await callClicnwork.getCandidate(currentBegin, currentEnd);
        
        const candidateDataArray = rawData.map(jsonInput => fromJsonTodata.parseCandidateData(jsonInput));
        
        const existingCandidates = await candidateService.getAllCandidates();
    
        for (const candidateData of candidateDataArray) {
        const existingData = existingCandidates.find(r => r.uid === candidateData.uid);
        
        if ( candidateData.uidMainAgency == process.env.AGENCY_UID) {
            console.log("candidate");
            if (existingData) {
                await candidateService.updateCandidate(candidateData);
            } else {
                await candidateService.createCandidate(candidateData);
            }
            }
        
    
        currentBegin = currentEnd;
    }
}}

export default updateCandidateDatabaseWithApiData;