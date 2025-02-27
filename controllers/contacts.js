const Contact = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res, next) => {
    const { _id: owner } = req.user;

    const { page = 1, limit = 10, favorite } = req.query;
    const skip = (page - 1) * limit;
    const query = favorite === undefined ? { owner } : { owner, favorite };

    const result = await Contact.find(query, {}, { skip, limit }).populate(
        "owner",
        "email subscription"
    );

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
    const { _id: owner } = req.user;
    const result = await Contact.create({ ...req.body, owner });
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
