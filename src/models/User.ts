import { Prisma } from '@prisma/client';
import prisma from '../database/client';

class User {
    static async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({ data });
        return user;
    }
}

export = User;
