import { PrismaClient } from '@prisma/client';
import { ClientExchangeData } from "../../../lib/types/databaseTypes"

const prisma = new PrismaClient();


class ClientExchangeService {
    // Créer un nouvel échange client
    async createClientExchange(clientExchangeData: ClientExchangeData) {
        return await prisma.clientExchange.create({
            data: clientExchangeData,
        });
    }

    // Récupérer tous les échanges clients
    async getAllClientExchanges() {
        return await prisma.clientExchange.findMany();
    }

    // Récupérer un échange client par son UID
    async getClientExchangeByUid(uid: string) {
        return await prisma.clientExchange.findUnique({
            where: { uid },
        });
    }

    // Mettre à jour un échange client
    async updateClientExchange(updateData: ClientExchangeData) {
        const uid = updateData.uid;
        return await prisma.clientExchange.update({
            where: { uid },
            data: updateData,
        });
    }

    // Supprimer un échange client
    async deleteClientExchange(uid: string) {
        return await prisma.clientExchange.delete({
            where: { uid },
        });
    }
}

export default new ClientExchangeService();
