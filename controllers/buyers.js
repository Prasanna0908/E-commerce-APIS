const User = require("../models/User");

exports.get_catalog = async (req, res, next) => {
  try {
    const { seller_id } = req.params;

    const task = await User.findOne({ _id: seller_id });
    if (!task) {
      return res.status(404).json(`msg:No task with ID: `);
    }
    res.status(200).json(task.catalog);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.list_of_sellers = async (req, res, next) => {
  try {
    const sellers = await User.find({ type_of_user: "seller" });
    if (!sellers) {
      return res.status(404).json({ msg: `No sellers` });
    }
    res.status(201).json({ sellers });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.create_order = async (req, res, next) => {
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
  };
