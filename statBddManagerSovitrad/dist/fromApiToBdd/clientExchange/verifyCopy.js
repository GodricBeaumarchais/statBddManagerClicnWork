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
const clientExchange_service_1 = __importDefault(require("../../kpi/services/clientExchange.service"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function updateClientExchangeDatabaseWithApiData() {
    return __awaiter(this, void 0, void 0, function* () {
        const totalClientExchange = yield callClicnwork_1.default.getClientExchangeTotal();
        const batchSize = 100; // Exemple de taille de lot
        let currentBegin = 0;
        console.log(totalClientExchange);
        while (currentBegin < totalClientExchange) {
            const currentEnd = Math.min(currentBegin + batchSize, totalClientExchange);
            console.log(currentBegin, " / ", totalClientExchange);
            const rawData = yield callClicnwork_1.default.getClientExchange(currentBegin, currentEnd);
            const clientExchangeDataArray = rawData.map(jsonInput => fromJsonTodata_1.default.parseClientExchangeData(jsonInput));
            const existingClientExchange = yield clientExchange_service_1.default.getAllClientExchanges();
            for (const clientExchangeData of clientExchangeDataArray) {
                const existingData = existingClientExchange.find(r => r.uid === clientExchangeData.uid);
                if (clientExchangeData.uidMainAgency == process.env.AGENCY_UID) {
                    console.log("update clientExchange");
                    if (existingData) {
                        yield clientExchange_service_1.default.updateClientExchange(clientExchangeData);
                    }
                    else {
                        yield clientExchange_service_1.default.createClientExchange(clientExchangeData);
                    }
                }
            }
            currentBegin = currentEnd;
        }
    });
}
exports.default = updateClientExchangeDatabaseWithApiData;
//updateDatabaseWithApiData().catch(console.error);
//# sourceMappingURL=verifyCopy.js.map