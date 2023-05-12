import { Prisma } from '@prisma/client';
import prisma from '../database/client';

class User {
    static async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({ data });
        return user;
    }

    static async getById(id: number) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        return user;
    }
}

export = User;
