import { PrismaClient } from '@prisma/client';
import { RecrutementData } from "../../../lib/types/databaseTypes"

const prisma = new PrismaClient();


class RecrutementService {
    // Créer un nouveau recrutement
    async createRecrutement(recrutementData: RecrutementData) {
        return await prisma.recrutement.create({
            data: recrutementData,
        });
    }

    // Récupérer tous les recrutements
    async getAllRecrutements() {
        return await prisma.recrutement.findMany();
    }

    // Récupérer un recrutement par son UID
    async getRecrutementByUid(uid: string) {
        return await prisma.recrutement.findUnique({
            where: { uid },
        });
    }

    // Mettre à jour un recrutement
    async updateRecrutement(updateData: RecrutementData) {
        const uid = updateData.uid;
        return await prisma.recrutement.update({
            where: { uid },
            data: updateData,
        });
    }

    // Supprimer un recrutement
    async deleteRecrutement(uid: string) {
        return await prisma.recrutement.delete({
            where: { uid },
        });
    }
}

export default new RecrutementService();
