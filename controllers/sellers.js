const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.create_catalog = async (req, res, next) => {
    try{
        const {  products } = req.body;
        let token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const id = decoded.id

        const sellers = await User.findOneAndUpdate({ _id: id, type_of_user:"seller" } ,{$set:{catalog:products}}, {new: true})

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
     
        let token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const seller_id = decoded.id
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