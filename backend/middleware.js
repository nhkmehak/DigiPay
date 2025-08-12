const jwt = require("jsonwebtoken")
const {JWT_secret} = require("./config")

function authmiddleware (req,res,next)
{
    const authheader = req.headers.authorization;
    if(!authheader || !authheader.startsWith("Bearer"))

        {
            return res.status(403).json({})
        }

        const token = authheader.split(" ")[1];
        try
        {
            const decoded= jwt.verify(token, JWT_secret)
            req.userId = decoded.userId
            next()
        }
        catch(err)
        {
return res.status(403).json({})
        }
}

module.exports={authmiddleware}