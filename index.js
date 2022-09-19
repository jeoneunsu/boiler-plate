const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const {User} = require("./models/User");

//application/x-www-form-urlencoded 정보 분석
app.use(bodyParser.urlencoded({extended: true}))
//application/json파일을 분석
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://eunsu:V8S4MseZ7wS8Pha@cluster0.mugekus.mongodb.net/?retryWrites=true&w=majority', 
{ useUnifiedTopology: true}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/',(req, res) => {res.send('Hello Word!')})

app.post('/register',(req,res)=>{   
    //회원가입할 때 필요한 정보들을 client에서 가져오면,
    //그 정보들을 DB에 넣어준다.
    const user = new User(req.body);
    //user모델에 정보가 저장됨
    //실패 시, 실패한 정보를 보내줌
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    }) 
})

app.listen(port, () => console.log(`example app listening on port ${port}!`))