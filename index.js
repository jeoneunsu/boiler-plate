const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://eunsu:V8S4MseZ7wS8Pha@cluster0.mugekus.mongodb.net/?retryWrites=true&w=majority', 
{ useUnifiedTopology: true}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/',(req, res) => res.send('Hello Word!'))
app.listen(port, () => console.log(`example app listening on port ${port}!`))