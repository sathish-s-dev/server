import { Request, Response } from 'express';
import { projects, skillData } from '../constants';

export const getProjects = (req: Request, res: Response) => {
	try {
		res.json({
			success: true,
			data: projects,
			error: null,
		});
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({
				success: false,
				data: null,
				error: error.message,
			});
		}
	}
};

export const getSkills = (req: Request, res: Response) => {
	try {
		res.json({
			success: true,
			data: skillData,
			error: null,
		});
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({
				success: false,
				data: null,
				error: error.message,
			});
		}
	}
};
