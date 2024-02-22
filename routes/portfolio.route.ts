import { Router } from 'express';
import { projects, skillData } from '../constants';
import { getProjects, getSkills } from '../controllers/portfolio.controller';

const router = Router();

router.get('/projects', getProjects);

router.get('/skills', getSkills);

export default router;
