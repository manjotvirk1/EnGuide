const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secret';


const auth=(req, res, next)=> {
    const token = req.header('auth-token');

    //token check
    if(!token) return res.status(401).send({error:"Please authenticate using a valid token"});

    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    }catch(e) {
        console.log(e);
        res.status(400).json({msg: 'Token is not valid'});
    }
}

module.exports = auth;