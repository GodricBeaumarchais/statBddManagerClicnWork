import callClicnwork from "../api/clicNwork/dayRequest/callClicnwork";
import fromJsonTodata from "../utils/fromJsonTodata";
import activePropositionService from "./activeProposition.service";
import dotenv from "dotenv";
dotenv.config();


async function updateActivePropositionDatabaseWithApiData() {
    const totalActiveProposition = await callClicnwork.getActivePropositionTotal();
    const batchSize = 100; // Exemple de taille de lot
    let currentBegin = 0;
    console.log(totalActiveProposition);
    while (currentBegin < totalActiveProposition) {
        const currentEnd = Math.min(currentBegin + batchSize, totalActiveProposition);
        console.log(currentBegin, " / ", totalActiveProposition);
        const rawData = await callClicnwork.getActiveProposition(currentBegin, currentEnd);
    
        const activePropositionDataArray = rawData.map(jsonInput => fromJsonTodata.parseActivePropositionData(jsonInput));
    
        const existingActiveProposition = await activePropositionService.getAllActivePropositions();
    
        for (const activePropositionData of activePropositionDataArray) {
        const existingData = existingActiveProposition.find(r => r.uid === activePropositionData.uid);
        
        if ( activePropositionData.uidMainAgency == process.env.AGENCY_UID) {
            console.log("update activeProposition");
            if (existingData  ) {
                await activePropositionService.updateActiveProposition(activePropositionData);
            } else {
                await activePropositionService.createActiveProposition(activePropositionData);
            }
            }
        }
        
    
        currentBegin = currentEnd;
    }
}

export default updateActivePropositionDatabaseWithApiData;