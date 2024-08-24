const sequelize=require('../util/database');
const {Supplier}=require('../models/supplier');
const {OP}=require('sequelize');

exports.searchManufacturers=async (req, res, next)=>{
    try{
        const {supplierName, location, manufacturingProcess}=req.body;
        const {page}=req.query;
        if(page) page *= 10;
        else page=0;
        if(supplierName || location || manufacturingProcess )
        {
           const suppData=await Supplier.findAll({where:
                {
                     company_name:supplierName,
                    location:location,
                    manufacturing_processes:manufacturingProcess
                },
                limit:10,
                 offset:page
            });
            if(suppData.length>0) res.status(200).json({suppData});
        }       
        res.status(401).json({message:'items Not found'});

    }catch(err)
    {
        console.log(err);
    }
}