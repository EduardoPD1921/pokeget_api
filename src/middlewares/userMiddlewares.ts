import { Request, Response, NextFunction } from 'express';
import prisma from '../database/client';

import { validate } from '../services/validatorService';
import { userAuthValidation } from '../utils/validationObjects'

export async function getUser(req: Request, res: Response, next: NextFunction) {
    const validateError = await validate(userAuthValidation, req.body);
    if (validateError.length > 0) {
        return res.status(400).send(validateError);
    }

    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        }
    });

    if (user) {
        res.locals.user = user;
        return next();
    }

    res.status(400).send('User not found.');
}
