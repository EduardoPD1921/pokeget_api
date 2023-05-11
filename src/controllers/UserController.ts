import { Request, Response } from 'express';

class UserController {
    static createUser(_req: Request, res: Response) {
        res.send('User created.');
    }

    static getUser(_req: Request, res: Response) {
        res.send('User.');
    }
}

export = UserController;
