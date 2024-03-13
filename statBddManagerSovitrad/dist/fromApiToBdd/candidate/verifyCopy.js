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
const candidate_service_1 = __importDefault(require("../../kpi/services/candidate.service"));
function updateCandidateDatabaseWithApiData() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("updateCandidateDatabaseWithApiData");
        const totalCandidates = yield callClicnwork_1.default.getCandidateTotal();
        const batchSize = 100; // Exemple de taille de lot
        let currentBegin = 0;
        console.log(totalCandidates);
        while (currentBegin < totalCandidates) {
            const currentEnd = Math.min(currentBegin + batchSize, totalCandidates);
            console.log(currentBegin, " / ", totalCandidates);
            const rawData = yield callClicnwork_1.default.getCandidate(currentBegin, currentEnd);
            const candidateDataArray = rawData.map(jsonInput => fromJsonTodata_1.default.parseCandidateData(jsonInput));
            const existingCandidates = yield candidate_service_1.default.getAllCandidates();
            for (const candidateData of candidateDataArray) {
                const existingData = existingCandidates.find(r => r.uid === candidateData.uid);
                if (candidateData.uidMainAgency == process.env.AGENCY_UID) {
                    console.log("candidate");
                    if (existingData) {
                        yield candidate_service_1.default.updateCandidate(candidateData);
                    }
                    else {
                        yield candidate_service_1.default.createCandidate(candidateData);
                    }
                }
                currentBegin = currentEnd;
            }
        }
    });
}
exports.default = updateCandidateDatabaseWithApiData;
//# sourceMappingURL=verifyCopy.js.map