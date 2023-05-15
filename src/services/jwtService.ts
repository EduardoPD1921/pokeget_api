import jwt from 'jsonwebtoken';

export function generateRefreshAndAccessToken(email: string) {
    const token = jwt.sign({ email }, process.env.TOKEN_SECRET as string, { expiresIn: '1800s' });
    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '86400s' });

    return { token, refreshToken };
}

export function isTokenValid(token: string, secretKey: string) {
    try {
        return jwt.verify(token, secretKey);
    } catch (e) {
        return false;
    }
}

export function decodeToken(token: string) {
    return jwt.decode(token);
}
