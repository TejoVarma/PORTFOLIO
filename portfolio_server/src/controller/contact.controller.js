require("dotenv").config();
const Contacts = require("../model/contact.model");

const contactControllers = {};

contactControllers.postContact = async function (req, res) {
    try {
        let contact = await new Contacts(req.body);
        let newContact = await contact.save();
        res.status(201).json({status : "Success", result : contact});
    }
    catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}
module.exports = contactControllers;