import { NextFunction, Request, Response } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
	console.log();
	// req.headers.authorization !== 'hello' && res.status(401).send('unauthorized');
	next();
};
