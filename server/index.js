const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
const db = require('./config/db');

app.get('/',(req,res)=>{
    res.send('Helo');
})

app.use('/api/user',require('./routes/user'))


const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
