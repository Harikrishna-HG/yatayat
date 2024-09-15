const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact-controller");

router.post("/contact", contactController.contactForm);
router.get("/contact", contactController.getAllMessage);
router.delete('/:id', contactController.deleteContact);


module.exports = router;
