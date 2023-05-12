import express, { Request, Response } from 'express';

import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);

export = router;
