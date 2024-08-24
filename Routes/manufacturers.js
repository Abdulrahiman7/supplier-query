const express=require('express');
const router=express.Router();
const {Authorization}=require('../middleware/token');
const manufacturersControl=require('../controllers/manufacturers');

router.post('/api/supplier/query',Authorization,  manufacturersControl.searchManufacturers );

module.exports=router;