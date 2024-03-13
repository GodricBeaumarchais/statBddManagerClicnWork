import { PrismaClient } from '@prisma/client';
import { ActivePropositionData } from "../../../lib/types/databaseTypes"

const prisma = new PrismaClient();


class ActivePropositionService {
    // Créer une nouvelle proposition active
    async createActiveProposition(ActiveData: ActivePropositionData) {
        return await prisma.activeProposition.create(
            {
                data: ActiveData,
            }
            
        );
    }

    // Récupérer toutes les propositions actives
    async getAllActivePropositions() {
        return await prisma.activeProposition.findMany();
    }

    // Récupérer une proposition active par UID
    async getActivePropositionByUid(uid: string) {
        return await prisma.activeProposition.findUnique({ where: { uid } });
    }

    // Mettre à jour une proposition active
    async updateActiveProposition( data: ActivePropositionData) {
        const uid = data.uid;
        return await prisma.activeProposition.update({ where: { uid }, data: data });
    }

    // Supprimer une proposition active
    async deleteActiveProposition(uid: string) {
        return await prisma.activeProposition.delete({ where: { uid } });
    }
}

export default new ActivePropositionService();
