const User = require("../models/User");

exports.create_catalog = async (req, res, next) => {
    try{
        const { id, products } = req.body;
        
        const sellers = await User.findOneAndUpdate({ _id: id, type_of_user:"buyer" } ,{$set:{catalog:products}}, {new: true})
       
        console.log(sellers)
      
        if(!sellers){
             return res.status(404).json({msg:`No sellers`})
        }
        res.status(201).json({sellers})
    }catch(err){
        res.status(500).json({msg:err })
    }
}