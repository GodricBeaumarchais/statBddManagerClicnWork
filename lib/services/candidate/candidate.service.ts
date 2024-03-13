import { PrismaClient } from "@prisma/client";
import { CandidateData } from "../../../lib/types/databaseTypes";

const prisma = new PrismaClient();

class CandidateService {
    // Créer un nouveau candidate
    async createCandidate(candidateData: CandidateData) {
        return await prisma.candidate.create({
            data: candidateData,
        });
    }

    // Récupérer tous les candidates
    async getAllCandidates() {
        return await prisma.candidate.findMany();
    }

    // Récupérer un candidate par son UID
    async getCandidateByUid(uid: string) {
        return await prisma.candidate.findUnique({
            where: { uid },
        });
    }

    // Mettre à jour un candidate
    async updateCandidate(updateData: CandidateData) {
        const uid = updateData.uid;
        return await prisma.candidate.update({
            where: { uid },
            data: updateData,
        });
    }

    // Supprimer un candidate
    async deleteCandidate(uid: string) {
        return await prisma.candidate.delete({
            where: { uid },
        });
    }
}

export default new CandidateService();