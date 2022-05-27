const User = require("../models/User");

exports.list_of_sellers = async (req, res, next) => {
    try{
        const sellers = await User.find({ 'type_of_user': 'seller' })
        if(!sellers){
            return res.status(404).json({msg:`No sellers`})
        }
        res.status(201).json({sellers})
    }catch(err){
        res.status(500).json({msg:err })
    }
}
