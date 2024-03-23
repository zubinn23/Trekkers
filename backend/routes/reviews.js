
import  express  from "express";
import { createReview } from "../controller/reviewController.js";
import { verifyUser } from "../controller/utils/verifyToken.js";


const router = express.Router()

router.post('/:trekId', verifyUser, createReview)

export default router