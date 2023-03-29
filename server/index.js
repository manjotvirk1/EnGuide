const express = require('express');
const mongoose = require('mongoose');
var cors=require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const db = require('./config/db');

app.get('/',(req,res)=>{
    res.send('Helo');
})

app.use('/api/auth/user',require('./routes/user'))
app.use('/api/auth/assignment',require('./routes/assignment'))


const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
