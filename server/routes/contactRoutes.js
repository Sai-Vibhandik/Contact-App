const express = require("express");

const {addContact , getContact , deleteContact} = require("../controllers/contactControllers");

const router = express.Router();

//Post -> addContact 
router.post("/",addContact);

//get -> getContact
router.get("/",getContact);

//delete -> deleteContact
router.delete("/:id",deleteContact);

module.exports = router;

