import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function createHash(textToBeHashed: string) {
    const hash = await bcrypt.hash(textToBeHashed, SALT_ROUNDS);
    return hash;
}
