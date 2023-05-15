import { Request, Response } from 'express';

import { isTokenValid, decodeToken, generateRefreshAndAccessToken } from '../services/jwtService';

interface UserJwtPayload {
    email: string;
}

class TokenController {
    static async generateNewTokenByRefreshToken(req: Request, res: Response) {
        const { refreshToken, email } = req.body;

        if (isTokenValid(refreshToken, process.env.REFRESH_TOKEN_SECRET as string)) {
            const data = decodeToken(refreshToken) as UserJwtPayload;
            if (data && data.email == email) {
                const { token, refreshToken } = generateRefreshAndAccessToken(email);
                return res.status(200).send({ token, refreshToken });
            }

            return res.status(401).send('Mismatch between session user and token');
        }

        return res.status(400).send('Invalid token.');
    }
}

export = TokenController;
