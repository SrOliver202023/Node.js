const JWT = require('jsonwebtoken');

module.exports = {
    auth: async function(req, res, next){
        const userToken = req.header('authorization')

        try{
            const userDecode = JWT.verify(userToken, process.env.SECRET);
            console.log(`Hello ${userDecode.name}`);
            next();

        }catch(err){
            console.log(`Token Expired!`);
            res.status(400).json({msgClient: "you need to be logged in to access this content!"});
        };
    }
}