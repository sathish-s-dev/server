import express, { Express, Response, Request } from 'express';
import { getAllUsers, getUser } from './controllers/users.controller';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';

import PortfolioRouter from './routes/portfolio.route';

const app: Express = express();

config();

app.use(express.json());
app.use(helmet());
app.use(
	cors({
		origin: '*',
	})
);

app.use(morgan('dev'));

app.get('/users', getAllUsers);
app.get('/users/:id', getUser);

app.use('/api/v1/portfolio', PortfolioRouter);

app.listen(3000, () => {
	console.log('server running on port 3000');
});
