// const contacts = require("../models/contacts");
const Contact = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res, next) => {
    const result = await Contact.find();
    res.json(result);
};

const getById = async (req, res) => {
    const { contactId } = req.params;

    const result = await Contact.findById(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.status(200).json(result);
};

const addContact = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
};

const removeContact = async (req, res) => {
    const { contactId } = req.params;

    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.status(200).json("contact deleted");
};

const updateContact = async (req, res) => {
    const { contactId } = req.params;

    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
        new: true,
    });
    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.status(200).json(result);
};

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;

    // не спрацьовує викидання помилки
    if (req.body === {} || req.body === "") {
        throw HttpError(400, "missing field favorite");
    }

    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
        new: true,
    });

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
    updateStatusContact: ctrlWrapper(updateStatusContact),
};
