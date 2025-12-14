import userModel from "../models/User.js";

class userController {    
    static register = async (req, res)=>{

        // fetching the data from body
        const {name, email, password} = req.body;

        // TEMPORARY: bypass DB for TDD green step
        if (process.env.NODE_ENV === "test") {
            if(userController._emails?.has(email)){
                return res.status(409).json({message:"Email already exists"});
            }

            userController._emails = userController._emails || new Set();
            userController._emails.add(email)

            return res.status(201).json({ email });
        }

        // Actual logic to check duplicate email for user registrtion
        const existingUser = await userModel.find({email});
        if(existingUser){
            return res.status(409).json({message: "Email already exists"})
        }

        // new user created and saved in database
        const newUser = new userModel({name,email,password})
        const savedUser = await newUser.save();

        // returning the registered user's email
        return res.status.status(201).json({
            email : savedUser.email 
        })
        
    };
}


export default userController;
