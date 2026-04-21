const mongoose = require("mongoose");

const EmailTemplateSchema = new mongoose.Schema({
    // The "type" field allows us to store all 6 templates separately!
    type: {
        type: String,
        required: true,
        unique: true,
        default: "submission_success"
    },
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("EmailTemplate", EmailTemplateSchema);