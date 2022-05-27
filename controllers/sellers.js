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

exports.get_orders = async (req, res, next) => {
    try{
        const {seller_id} = req.body
        const sellers = await User.findOne({_id : seller_id});
        console.log(sellers)
        if (!sellers) {
        return res.status(404).json({ msg: `No sellers` });
        }
      
        res.status(200).json(sellers.orders)
    }catch(err){
        res.status(500).json({msg:err })
    }
}