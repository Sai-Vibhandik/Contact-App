const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "Please enter a valid email"
            ]
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true
        },
        message: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true // adds createdAt & updatedAt
    }
);

module.exports = mongoose.model("Contact", contactSchema);
