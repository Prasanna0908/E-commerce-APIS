const express = require("express");
const router = express.Router();
const { create_catalog } = require("../controllers/sellers");
const { protect } = require("../middleware/auth");

router.route("/create-catalog").post(create_catalog );

module.exports = router;