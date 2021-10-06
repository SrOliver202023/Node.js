const jwt = require('jsonwebtoken');

const auth = async function(req, res, next){

  try{
    let tokenChecked = jwt.verify(req.header('authorization'), process.env.SECRET)
    next();
  }catch(error){
    res.status(401).send(error.message)
  }

}


module.exports = auth;
