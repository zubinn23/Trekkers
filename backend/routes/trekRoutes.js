// routes/trekRoutes.js

import express from 'express';
import { getRecommendedTreks } from '../controllers/trekController.js';

const router = express.Router();

// Route to get recommended treks for a user ID
router.get('/recommendations/:userId', getRecommendedTreks);

export default router;
