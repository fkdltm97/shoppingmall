const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONG_URI)
.then(()=>{
    console.log('연결완료');
}).catch(err =>{
    console.error(err);    
})

app.post('/', (req, res)=>{
    console.log(req.body);
    res.json(req.body);
})

app.get('/', (req, res, next)=>{
    // res.send('헬로우 월드!!!!');
    setImmediate(()=>{ next( new Error('it error')) });
})

app.use((error, req, res, next)=>{
    res.status(err.status || 500)
    res.send(error.message || '서버에서 에러가 났습니다.')
})


app.listen(4000, ()=>{
    console.log(`${port}번에서 실행이 되었습니다.`);
});

app.use(express.static(path.join(__dirname,'../uploads')));
