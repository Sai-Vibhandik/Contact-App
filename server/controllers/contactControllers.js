const Contact = require("../models/contact")


const addContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !phone) {
            return res.status(400).json({
                message: "Name and phone are required",
            });
        }

        const contactAdded = await Contact.create({
            name,
            email,
            phone,
            message
        });

        res.status(201).json(contactAdded);

    } catch (error) {
        res.status(500).json({
            message: "Failed to add Contact",
            error: error.message
        });

    }
}


const getContact = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {

        res.status(500).json({
            message: "Failed to Fetch Contacts",
            error: error.message
        });
    }

}


const deleteContact = async (req, res) => {
    try {
        const contactToDelete = await Contact.findById(req.params.id);

        if (!contactToDelete) {
            return res.status(400).json({
                message: "Contact not found"
            });
        }

        await contactToDelete.deleteOne();

        res.status(200).json({ message: "contact deleted successfully" });

    } catch (error) {

        res.status(400).json({
            message: "Failed to delete Contact",
            error: error.message
        });

    }
}

module.exports = {
    addContact,
    getContact,
    deleteContact
};