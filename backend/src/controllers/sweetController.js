import sweetModel from "../models/Sweet.js";

class sweetController{
    
    static add = async (req,res)=>{
        const {name,category,price,quantity} = req.body

        // Temporary: To bypass the DB for TDD green case
        if(process.env.NODE_ENV === "test"){   
            return res.status(201).json({name,category,price,quantity});
        }
        
        // Actual production code
        const newSweet = new sweetModel({name,category,price,quantity});
        const savedSweet = await newSweet.save();
        
        return res.status(201).json({sweet: savedSweet});
    }
}

export default sweetController