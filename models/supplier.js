const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Supplier=sequelize.define('supplier',{
    supplier_id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    company_name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    website:{
        type:Sequelize.STRING,
        allowNull:false
    },
    location:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nature_of_business:{
        type:Sequelize.STRING,
        allowNull:false
    },manufacturing_processes:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
module.exports=Supplier;
