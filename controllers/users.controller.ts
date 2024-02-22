import { Request, Response } from 'express';
import users from '../users.json';
import axios, { AxiosResponse } from 'axios';

export const getAllUsers = async (req: Request, res: Response) => {
	const { data } = await axios.get<Promise<AxiosResponse<any>>>(
		'https://jsonplaceholder.typicode.com/users'
	);

	res.json({
		success: true,
		data: users,
	});
};

export const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	// let user = users.users.find((item) => item.id === +id);
	const { data: user } = await axios.get<Promise<AxiosResponse<any>>>(
		'https://jsonplaceholder.typicode.com/users'
	);
	res.json({
		success: true,
		data: user,
	});
};
