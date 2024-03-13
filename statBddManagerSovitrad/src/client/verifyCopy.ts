import callClicnwork from "../api/clicNwork/dayRequest/callClicnwork";
import fromJsonTodata from "../utils/fromJsonTodata";
import clientService from "./client.service";
import dotenv from "dotenv";
dotenv.config();

async function updateClientDatabaseWithApiData() {
    console.log("updateClientDatabaseWithApiData");
    const totalClients = await callClicnwork.getClientTotal();
    const batchSize = 100; // Exemple de taille de lot
    let currentBegin = 0;
    console.log(totalClients);
    while (currentBegin < totalClients) {
        const currentEnd = Math.min(currentBegin + batchSize, totalClients);
        console.log(currentBegin, " / ", totalClients);
        const rawData = await callClicnwork.getClient(currentBegin, currentEnd);
        
        const clientDataArray = rawData.map(jsonInput => fromJsonTodata.parseClientData(jsonInput));
        
        const existingClients = await clientService.getAllClients();
    
        for (const clientData of clientDataArray) {
        const existingData = existingClients.find(r => r.uid === clientData.uid);
        
        if(clientData.uidMainAgency == process.env.AGENCY_UID){
            console.log("update client");
            if (existingData) {
                await clientService.updateClient(clientData);
            } else {
                await clientService.createClient(clientData);
            }
        }
    
        currentBegin = currentEnd;
    }
}}
export default updateClientDatabaseWithApiData;