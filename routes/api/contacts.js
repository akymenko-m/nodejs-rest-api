const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const {
    validateBody,
    isValidId,
    validateBodyFaforite,
} = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.put(
    "/:contactId",
    isValidId,
    validateBody(schemas.addSchema),
    ctrl.updateContact
);

router.patch(
    "/:contactId/favorite",
    isValidId,
    validateBodyFaforite(schemas.updateFavoriteSchema),
    ctrl.updateStatusContact
);

module.exports = router;
