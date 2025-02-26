const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
// Route for getting all contacts
router.route("/").get(getContacts);

// Route for creating a contact
router.route("/").post(createContact);

// Route for getting a specific contact
router.route("/:id").get(getContact);

// Route for updating a contact
router.route("/:id").put(updateContact);

// Route for deleting a contact
router.route("/:id").delete(deleteContact);

module.exports = router; // Keep this at the end



