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
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const errorManager_1 = __importDefault(require("../../../utils/errorManager"));
dotenv_1.default.config();
function ApiCallData(Type, begin, end, onTest = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const vTest = onTest ? "version-test/" : "";
        const url = `https://app.clicnwork.io/${vTest}api/1.1/wf/${Type}?from=${begin}&to=${end}`;
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const response = yield fetch(url, options);
            const data = yield response.text();
            const myData = (0, errorManager_1.default)(data);
            const jsonData = JSON.parse(myData.validJson);
            fs_1.default.writeFileSync(`./logs/${Type}.log`, myData.erroredObjects.join("\n"), 'utf8');
            fs_1.default.writeFileSync(`./logs/${Type}.json`, data, 'utf8');
            const rawData = jsonData.map((Type) => JSON.stringify(Type));
            return rawData;
        }
        catch (error) {
            console.error(error);
        }
    });
}
function ApiCallTotal(Type, onTest = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const vTest = onTest ? "version-test/" : "";
        const url = `https://app.clicnwork.io/${vTest}api/1.1/wf/${Type}?from=0&to=0`;
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const response = yield fetch(url, options);
            const data = yield response.json();
            return data.total;
        }
        catch (error) {
            console.error(error);
        }
    });
}
const token = process.env.CLICNWORK_API_BEARER_TOKEN;
class CallClicnwork {
    constructor() {
        this.token = token;
    }
    getRecruitments(bigin, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallData("recruitments", bigin, end);
        });
    }
    getActiveProposition(bigin, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallData("activeProposition", bigin, end);
        });
    }
    getClient(bigin, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallData("client", bigin, end);
        });
    }
    getClientExchange(bigin, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallData("clientExchange", bigin, end);
        });
    }
    getCandidate(bigin, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallData("candidate", bigin, end);
        });
    }
    // async getCandidate(bigin: number, end: number) {
    //     const url = `https://app.clicnwork.io/api/1.1/wf/candidate?from=${bigin}&to=${end}`;
    //     const options = {
    //         method: 'GET',
    //         headers: { Authorization: `Bearer ${this.token}` }
    //     };
    //     try {
    //         const response = await fetch(url, options);
    //         const data = await response.json();
    //         return data.candidate;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    getRecruitmentTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallTotal("recruitments");
        });
    }
    getActivePropositionTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallTotal("activeProposition");
        });
    }
    getClientTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallTotal("client");
        });
    }
    getClientExchangeTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallTotal("clientExchange");
        });
    }
    getCandidateTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ApiCallTotal("candidate");
        });
    }
}
exports.default = new CallClicnwork();
//# sourceMappingURL=callClicnwork.js.map