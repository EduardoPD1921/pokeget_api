import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/userRoutes';

const app: Express = express();
const port: number = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});
