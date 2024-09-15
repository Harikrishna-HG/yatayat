const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in contact form submission: ", error);
    return res.status(500).json({ message: "Message was not delivered" });
  }
};

const getAllMessage = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error in fetching messages:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Delete contact by ID
const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    await Contact.findByIdAndDelete(contactId);
    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete bus' });
  }
};

module.exports = { contactForm, getAllMessage,deleteContact};
