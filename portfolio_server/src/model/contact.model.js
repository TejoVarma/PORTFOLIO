const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        purpose: {
            type: String,
            // required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamp: true }
);
const Contact = mongoose.model("contacts", contactSchema);
module.exports = Contact;