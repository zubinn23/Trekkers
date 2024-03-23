

import express from 'express'
import { createTrek, deleteTrek, getAllTrek, getFeaturedTrek,getSingleTrek, getTrekBySearch, getTrekCount, updateTrek } from '../controller/trekController.js'

import { verifyAdmin } from '../controller/utils/verifyToken.js'

const router = express.Router()



//ceate new trek
router.post('/',verifyAdmin, createTrek)

//update trek
router.put('/:id',verifyAdmin, updateTrek)

//delete trek
router.delete('/:id',verifyAdmin, deleteTrek)

//get single trek
router.get('/:id',getSingleTrek)

//get all trek
router.get('/',getAllTrek)


//get trek by search
router.get('/search/getTrekBySearch', getTrekBySearch)

router.get('/search/getFeaturedTreks', getFeaturedTrek)

router.get('/search/getTrekCount', getTrekCount)


export default router 