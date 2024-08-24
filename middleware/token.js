const jwt=require('jsonwebtoken');
const secretkey=process.env.JWT_SECRETKEY;


const Authorization=(req, res, next)=>{
    const user=req.header.user;
    const token=jwt.verify(user, secretkey, (err, decoded)=>{
        if(err) res.status(400).json({message: 'Not Authorized'});
        next();
    });
    
}

module.exports=Authorization;