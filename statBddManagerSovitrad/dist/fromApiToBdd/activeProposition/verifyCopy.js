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
const activeProposition_service_1 = __importDefault(require("../../kpi/services/activeProposition.service"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function updateActivePropositionDatabaseWithApiData() {
    return __awaiter(this, void 0, void 0, function* () {
        const totalActiveProposition = yield callClicnwork_1.default.getActivePropositionTotal();
        const batchSize = 100; // Exemple de taille de lot
        let currentBegin = 0;
        console.log(totalActiveProposition);
        while (currentBegin < totalActiveProposition) {
            const currentEnd = Math.min(currentBegin + batchSize, totalActiveProposition);
            console.log(currentBegin, " / ", totalActiveProposition);
            const rawData = yield callClicnwork_1.default.getActiveProposition(currentBegin, currentEnd);
            const activePropositionDataArray = rawData.map(jsonInput => fromJsonTodata_1.default.parseActivePropositionData(jsonInput));
            const existingActiveProposition = yield activeProposition_service_1.default.getAllActivePropositions();
            for (const activePropositionData of activePropositionDataArray) {
                const existingData = existingActiveProposition.find(r => r.uid === activePropositionData.uid);
                if (activePropositionData.uidMainAgency == process.env.AGENCY_UID) {
                    console.log("update activeProposition");
                    if (existingData) {
                        yield activeProposition_service_1.default.updateActiveProposition(activePropositionData);
                    }
                    else {
                        yield activeProposition_service_1.default.createActiveProposition(activePropositionData);
                    }
                }
            }
            currentBegin = currentEnd;
        }
    });
}
exports.default = updateActivePropositionDatabaseWithApiData;
//# sourceMappingURL=verifyCopy.js.map