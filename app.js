require('dotenv').config();
var cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port =process.env.PORT;
app.use(express.json());
app.use(cors())
app.use('/users',require('./api/user.api'));
app.use('/messages',require('./api/message.api'));
app.get('/',(req,res)=>{
    res.json("ok");
})
mongoose.connect("mongodb+srv://tariq:Tariq55@cluster0.wbontdq.mongodb.net/saraha");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));