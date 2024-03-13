import { ClientData } from '../../../lib/types/databaseTypes';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ClientService  {

    async createClient(clientData: ClientData) {
        return await prisma.client.create({
            data: clientData,
        });
    }

    async getAllClients() {
        return await prisma.client.findMany();
    }

    async getClientByUid(uid: string) {
        return await prisma.client.findUnique({
            where: { uid },
        });
    }

    async updateClient(updateData: ClientData) {
        const uid = updateData.uid;
        return await prisma.client.update({
            where: { uid },
            data: updateData,
        });
    }

    async deleteClient(uid: string) {
        return await prisma.client.delete({
            where: { uid },
        });
    }

    // Aucune autre méthode n'est nécessaire ici, car elles sont déjà définies dans ServiceClass
}

export default new ClientService();