import callClicnwork from '../api/clicNwork/dayRequest/callClicnwork';
import fromJsonTodata from '../utils/fromJsonTodata';
import clienExchangeService from './clientExchange.service';
import dotenv from "dotenv";
dotenv.config();


async function updateClientExchangeDatabaseWithApiData() {
    const totalClientExchange = await callClicnwork.getClientExchangeTotal();
    const batchSize = 100; // Exemple de taille de lot
    let currentBegin = 0;
    console.log(totalClientExchange);

    while (currentBegin < totalClientExchange) {
        const currentEnd = Math.min(currentBegin + batchSize, totalClientExchange);
        console.log(currentBegin, " / ", totalClientExchange);
        const rawData = await callClicnwork.getClientExchange(currentBegin, currentEnd);
        const clientExchangeDataArray = rawData.map(jsonInput => fromJsonTodata.parseClientExchangeData(jsonInput));
        const existingClientExchange = await clienExchangeService.getAllClientExchanges();
        for (const clientExchangeData of clientExchangeDataArray) {
            const existingData = existingClientExchange.find(r => r.uid === clientExchangeData.uid);
            
            if(clientExchangeData.uidMainAgency == process.env.AGENCY_UID){
                console.log("update clientExchange");
                if (existingData) {
                    await clienExchangeService.updateClientExchange(clientExchangeData);
                } else {
                    await clienExchangeService.createClientExchange(clientExchangeData);
                }
            }
        }
        currentBegin = currentEnd;
    }
}

export default updateClientExchangeDatabaseWithApiData;

//updateDatabaseWithApiData().catch(console.error);

