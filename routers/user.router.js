import express from 'express'; 
import {  Register,update,login } from '../controllers/user.controller.js';
import multer from '../middlewares/multer-config.js';
const router = express.Router(); 




router.route('/')

.post(multer,
    Register)

router.route('/:username').patch(update)
router.route('/login').post(login)

export default router ; 