import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controller/userController.js'

const router = express.Router()

import { verifyAdmin, verifyUser } from '../controller/utils/verifyToken.js'


//update trek
router.put('/:id',verifyUser,updateUser)

//delete trek
router.delete('/:id',verifyUser, deleteUser)

//get single trek
router.get('/:id',verifyUser, getSingleUser)

//get all trek
router.get('/',verifyAdmin, getAllUser)

export default router

