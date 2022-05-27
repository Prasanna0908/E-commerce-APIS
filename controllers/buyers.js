const User = require("../models/User");
const jwt = require("jsonwebtoken");

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
  try {
    let token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const buyer_id = decoded.id
    const { order} = req.body

    if (buyer_id === req.params.seller_id) {
      return res.status(404).json({ msg: `Cannot create order to yourself` });
    }
   
    const id = req.param.seller_id;
    const sellers = await User.findOneAndUpdate(
      { _id: req.params.seller_id },
      { $push: { orders: { id: buyer_id, order } } },
      { new: true }
    );

    if (!sellers) {
      return res.status(404).json({ msg: `No sellers` });
    }
    res.status(201).json({ sellers });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
