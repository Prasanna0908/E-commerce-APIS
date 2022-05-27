const express = require("express");
const router = express.Router();
const { list_of_sellers, get_catalog, create_order} = require("../controllers/buyers");
const { protect } = require("../middleware/auth");

router.route("/seller-catalog/:seller_id").get(get_catalog);
router.route("/list-of-sellers").get(list_of_sellers );
router.route("/create-order/:seller_id").post(create_order );


module.exports = router;
