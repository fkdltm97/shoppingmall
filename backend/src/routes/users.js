const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register',async (req, res, next)=>{
    //유저 데이터를 저장
    console.log('동작을 진행');
    try {
        const user = new User(req.body);
        await user.save();
        console.log('동작을 확인',user);
        
        return res.sendStatus(200);
    }catch (error){
        next(error)
    }
    
})

module.exports = router;