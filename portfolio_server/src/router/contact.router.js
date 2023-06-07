const express = require("express");
const contactControllers = require("../controller/contact.controller");
const router = express.Router();

router.post('/contact', contactControllers.postContact);

module.exports = router;