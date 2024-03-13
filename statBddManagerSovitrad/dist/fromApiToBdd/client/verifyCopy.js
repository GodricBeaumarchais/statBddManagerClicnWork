"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callClicnwork_1 = __importDefault(require("../../api/clicNwork/dayRequest/callClicnwork"));
const fromJsonTodata_1 = __importDefault(require("../../utils/fromJsonTodata"));
const client_service_1 = __importDefault(require("../../kpi/services/client.service"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function updateClientDatabaseWithApiData() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("updateClientDatabaseWithApiData");
        const totalClients = yield callClicnwork_1.default.getClientTotal();
        const batchSize = 100; // Exemple de taille de lot
        let currentBegin = 0;
        console.log(totalClients);
        while (currentBegin < totalClients) {
            const currentEnd = Math.min(currentBegin + batchSize, totalClients);
            console.log(currentBegin, " / ", totalClients);
            const rawData = yield callClicnwork_1.default.getClient(currentBegin, currentEnd);
            const clientDataArray = rawData.map(jsonInput => fromJsonTodata_1.default.parseClientData(jsonInput));
            const existingClients = yield client_service_1.default.getAllClients();
            for (const clientData of clientDataArray) {
                const existingData = existingClients.find(r => r.uid === clientData.uid);
                if (clientData.uidMainAgency == process.env.AGENCY_UID) {
                    console.log("update client");
                    if (existingData) {
                        yield client_service_1.default.updateClient(clientData);
                    }
                    else {
                        yield client_service_1.default.createClient(clientData);
                    }
                }
                currentBegin = currentEnd;
            }
        }
    });
}
exports.default = updateClientDatabaseWithApiData;
//# sourceMappingURL=verifyCopy.js.map