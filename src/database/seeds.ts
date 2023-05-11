import prisma from './client';

async function userSeed() {
    await prisma.user.createMany({
        data: [
            { email: 'eduardo@gmail.com', name: 'Eduardo' },
            { email: 'alexadnre@gmail.com', name: 'Alexandre' },
            { email: 'leonardo@gmail.com', name: 'Leonardo' },
            { email: 'matheus@gmail.com', name: 'Matheus' }
        ]
    });
}

userSeed()
    .catch((e) => console.error(e))
    .finally(() => {
        console.log('UserSeed runned.');
        prisma.$disconnect();
    });
