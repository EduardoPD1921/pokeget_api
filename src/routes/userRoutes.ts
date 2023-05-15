import express from 'express';

import UserController from '../controllers/UserController';

import { getUser } from '../middlewares/userMiddlewares';

const router = express.Router();

router.get('/:id', UserController.getUser);
router.post('/auth', getUser, UserController.authUser);
router.post('/', UserController.createUser);

export = router;
