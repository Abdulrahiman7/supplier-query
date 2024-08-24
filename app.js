const express=require('express');

const app=express();

const cors=require('cors');
const bodyParser=require('body-parser');
const route=require('./Routes/manufacturers');
const { Sequelize } = require('sequelize');
const sequelize = require('./util/database');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(route);

sequelize.sync()
.then(()=>{
    app.listen(3000);
})

