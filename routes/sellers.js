const express = require("express");
const router = express.Router();
const { create_catalog , get_orders} = require("../controllers/sellers");
const { protect } = require("../middleware/auth");

router.route("/create-catalog").post(create_catalog );
router.route("/orders").get(get_orders );

module.exports = router;