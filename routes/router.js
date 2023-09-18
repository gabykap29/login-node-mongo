import express from 'express';
import {authCtrl} from '../controllers/auth.controller.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Todo bien por aquí');
}); 

router.post('/api/register',authCtrl.register);
router.post('/api/login', authCtrl.login);

export default router;