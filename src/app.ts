import express, { Express, Request, Response } from 'express';

import userRoutes from './routes/userRoutes';

const app: Express = express();
const port: number = 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});
