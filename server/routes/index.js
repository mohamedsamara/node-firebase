import express from 'express';

import apiRoutes from './api';

const router = express.Router();

router.use('/api', apiRoutes);
router.use('/api', (req, res) => res.status(404).json('No API route found'));

export default router;
