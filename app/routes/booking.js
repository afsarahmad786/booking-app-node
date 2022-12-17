const path = require("path");

const express = require("express");

const bookingcontroller = require("../controllers/demo");

const router = express.Router();

router.get("/", bookingcontroller.getuser);

router.post("/users", bookingcontroller.adduser);
router.get("/user", bookingcontroller.getalluser);

router.delete("/user/:userid", bookingcontroller.deleteuser);
module.exports = router;
