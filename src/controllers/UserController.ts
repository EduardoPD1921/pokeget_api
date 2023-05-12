import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

import User from '../models/User';

import { createHash } from '../services/hashService';
import { handleError } from '../services/errorService';

class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            let userData: Prisma.UserCreateInput = req.body;
            userData.password = await createHash(userData.password);

            const user = await User.create(userData);
            res.status(201).send(user);
        } catch (e) {
            const error = handleError(e);
            res.status(500).send(error.message);
        }
    }

    static getUser(_req: Request, res: Response) {
        res.send('User.');
    }
}

export = UserController;
