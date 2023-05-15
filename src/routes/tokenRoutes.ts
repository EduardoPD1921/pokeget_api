import express from 'express';

import TokenController from '../controllers/TokenController';

const router = express.Router();

router.post('/generate-new-token-by-refresh-token', TokenController.generateNewTokenByRefreshToken);

export = router;
