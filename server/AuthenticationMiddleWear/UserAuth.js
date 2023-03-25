const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')

const verifyUser =(req,res,next)=>{
    console.log("enterd user headers..", req.headers)

      // Get token from cookie
  const token = req.cookies.access_token;



  console.log("token..",token)



  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token,process.env.JWT_USER_SECRET_KEY);

    // Set user ID in request object
    req.userId = decoded.userId;

    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }

}


module.exports={verifyUser}