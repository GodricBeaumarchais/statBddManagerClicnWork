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
const verifyCopy_1 = __importDefault(require("./fromApiToBdd/activeProposition/verifyCopy"));
const verifyCopy_2 = __importDefault(require("./fromApiToBdd/client/verifyCopy"));
const verifyCopy_3 = __importDefault(require("./fromApiToBdd/clientExchange/verifyCopy"));
const verifyCopy_4 = __importDefault(require("./fromApiToBdd/recruitments/verifyCopy"));
const verifyCopy_5 = __importDefault(require("./fromApiToBdd/candidate/verifyCopy"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, verifyCopy_1.default)().catch(console.error);
        (0, verifyCopy_2.default)().catch(console.error);
        (0, verifyCopy_3.default)().catch(console.error);
        (0, verifyCopy_4.default)().catch(console.error);
        (0, verifyCopy_5.default)().catch(console.error);
    });
}
main();
//# sourceMappingURL=app.js.map