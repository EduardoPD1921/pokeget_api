import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../database/client';

import User from '../models/User';

import { createHash } from '../services/hashService';
import { validate } from '../services/validatorService';
import { handleError } from '../services/errorService';

import { userValidation } from '../utils/validationObjects';

class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            const validateError = await validate(userValidation, req.body, prisma.user);
            if (validateError.length > 0) {
                return res.status(400).send(validateError);
            }

            let userData: Prisma.UserCreateInput = req.body;
            userData.password = await createHash(userData.password);

            const user = await User.create(userData);
            res.status(201).send(user);
        } catch (e) {
            const error = handleError(e);
            res.status(500).send(error.message);
        }
    }

    static async getUser(req: Request, res: Response) {
        const userId = Number(req.params.id);
        const user = await User.getById(userId);

        res.status(200).send(user);
    }
}

export = UserController;
