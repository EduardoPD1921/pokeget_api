import jwt from 'jsonwebtoken';

export function generateAccessToken(email: string) {
    return jwt.sign({ email }, process.env.TOKEN_SECRET as string, { expiresIn: '1800s' });
}
