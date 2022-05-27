const express = require("express");
const router = express.Router();
const { list_of_sellers } = require("../controllers/buyers");
const { protect } = require("../middleware/auth");

router.route("/list-of-sellers").get(list_of_sellers );

module.exports = router;
