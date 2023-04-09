const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res, next) => {
    const result = await contacts.listContacts();
    res.json(result);
};

const getById = async (req, res) => {
    const { contactId } = req.params;

    const result = await contacts.getById(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.status(200).json(result);
};

const addContact = async (req, res) => {
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
};

const removeContact = async (req, res) => {
    const { contactId } = req.params;

    const result = await contacts.removeContact(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.status(200).json("contact deleted");
};

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.status(200).json(result);
};

module.exports = {
    listContacts: ctrlWrapper(listContacts),
    getById: ctrlWrapper(getById),
    addContact: ctrlWrapper(addContact),
    removeContact: ctrlWrapper(removeContact),
    updateContact: ctrlWrapper(updateContact),
};
