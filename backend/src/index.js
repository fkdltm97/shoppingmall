const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 4000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONG_URI)
.then(()=>{
    console.log('연결완료');
}).catch(err =>{
    console.error(err);    
})

app.get('/', (req, res, next)=>{
    setImmediate(()=>{ next( new Error('it error')) });
    // res.send('헬로우 월드!!!!');
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.use('/users', require('./routes/users'));

app.use((error, req, res, next)=>{
    res.status(err.status || 500);
    res.send(error.message || '서버에서 에러가 났습니다.')
})

app.use(express.static(path.join(__dirname,'../uploads')));

app.listen(4000, ()=>{
    console.log(`${port}번에서 실행이 되었습니다.`);
});

