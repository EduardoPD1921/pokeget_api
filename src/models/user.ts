import { Prisma } from '@prisma/client';
import prisma from '../database/client';

export const create = async (data: Prisma.UserCreateInput) => {
    const user = await prisma.user.create({ data });
    return user;
}
