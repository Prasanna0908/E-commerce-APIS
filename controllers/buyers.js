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
  try {
    if (req.body.buyer_id === req.params.seller_id) {
      return res.status(404).json({ msg: `Cannot create order to yourself` });
    }
    console.log(req.params, req.body.buyer_id, req.body.order);
    const id = req.param.seller_id;
    const sellers = await User.findOneAndUpdate(
      { _id: req.params.seller_id },
      { $push: { orders: { id: req.params.seller_id, order } } },
      { new: true }
    );

    console.log(sellers);

    if (!sellers) {
      return res.status(404).json({ msg: `No sellers` });
    }
    res.status(201).json({ sellers });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
