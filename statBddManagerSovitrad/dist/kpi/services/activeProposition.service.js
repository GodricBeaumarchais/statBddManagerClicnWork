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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ActivePropositionService {
    // Créer une nouvelle proposition active
    createActiveProposition(ActiveData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.activeProposition.create({
                data: ActiveData,
            });
        });
    }
    // Récupérer toutes les propositions actives
    getAllActivePropositions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.activeProposition.findMany();
        });
    }
    // Récupérer une proposition active par UID
    getActivePropositionByUid(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.activeProposition.findUnique({ where: { uid } });
        });
    }
    // Mettre à jour une proposition active
    updateActiveProposition(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = data.uid;
            return yield prisma.activeProposition.update({ where: { uid }, data: data });
        });
    }
    // Supprimer une proposition active
    deleteActiveProposition(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.activeProposition.delete({ where: { uid } });
        });
    }
}
exports.default = new ActivePropositionService();
//# sourceMappingURL=activeProposition.service.js.map