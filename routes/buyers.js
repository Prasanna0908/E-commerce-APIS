const express = require("express");
const router = express.Router();
const { list_of_sellers, get_catalog, create_order} = require("../controllers/buyers");
const { protect } = require("../middleware/auth");

router.route("/seller-catalog/:seller_id").get(protect, get_catalog);

router.route("/list-of-sellers").get(protect, list_of_sellers );

router.route("/create-order/:seller_id").post(protect, create_order );


module.exports = router;
