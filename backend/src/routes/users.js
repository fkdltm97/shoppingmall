const express = require('express');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middleware/autj');

router.post('/register',async (req, res, next)=>{
    //유저 데이터를 저장
    try {
        const user = new User(req.body);
        await user.save();
        return res.sendStatus(200);
    }catch (error){
        next(error)
    }
})


router.get('/auth', auth, async (req, res, next)=>{
    return res.json({
        id : req.user._id,
        email : req.user.email,
        name : req.user.name,
        role : req.user.role,
        image : req.user.image,
    })
})


router.post('/login',async (req, res, next)=>{
    try {
      
        const user = await User.findOne({ email : req.body.email })
        
        if(!user){
            return res.status(400).send("Auth failed, email not found");
        }

        const isMatch = await user.comparePassword(req.body.password);

        if(!isMatch){
            return res.status(400).send('Wrong password');
        }

        const payload = {
            userId : user._id.toHexString(),
        }

        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : '1h'})

        return res.json({user, accessToken})

    }catch (error){
        next(error)
    }
})

router.post('/logout', auth, async (req, res, next)=>{
    //유저 데이터를 저장
    try {
        return res.sendStatus(200);
    }catch (error){
        next(error)
    }
})


module.exports = router;