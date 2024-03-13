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
const recrutement_service_1 = __importDefault(require("../../kpi/services/recrutement.service"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function updateRecrutementDatabaseWithApiData() {
    return __awaiter(this, void 0, void 0, function* () {
        const totalRecruitments = yield callClicnwork_1.default.getRecruitmentTotal();
        const batchSize = 100; // Exemple de taille de lot
        let currentBegin = 0;
        console.log(totalRecruitments);
        while (currentBegin < totalRecruitments) {
            const currentEnd = Math.min(currentBegin + batchSize, totalRecruitments);
            console.log(currentBegin, " / ", totalRecruitments);
            const rawData = yield callClicnwork_1.default.getRecruitments(currentBegin, currentEnd);
            const recruitmentDataArray = rawData.map(jsonInput => fromJsonTodata_1.default.parseRecrutementData(jsonInput));
            const existingRecruitments = yield recrutement_service_1.default.getAllRecrutements();
            for (const recruitmentData of recruitmentDataArray) {
                const existingData = existingRecruitments.find(r => r.uid === recruitmentData.uid);
                if (recruitmentData.uidMainAgency == process.env.AGENCY_UID) {
                    console.log("update recruitments");
                    if (existingData) {
                        yield recrutement_service_1.default.updateRecrutement(recruitmentData);
                    }
                    else {
                        yield recrutement_service_1.default.createRecrutement(recruitmentData);
                    }
                }
            }
            currentBegin = currentEnd;
        }
    });
}
exports.default = updateRecrutementDatabaseWithApiData;
//updateDatabaseWithApiData().catch(console.error);
//# sourceMappingURL=verifyCopy.js.map