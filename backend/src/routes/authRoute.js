import express from "express"
const authRoute = express.Router()

authRoute.post('/register', (req,res)=>{
    const {email} = req.body;
    
    return res.status(201).json({
        email
    });
});

export default authRoute;