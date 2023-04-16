const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const {
    validateBody,
    isValidId,
    validateBodyFaforite,
    authenticate,
} = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post(
    "/",
    authenticate,
    validateBody(schemas.addSchema),
    ctrl.addContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);

router.put(
    "/:contactId",
    authenticate,
    isValidId,
    validateBody(schemas.addSchema),
    ctrl.updateContact
);

router.patch(
    "/:contactId/favorite",
    authenticate,
    isValidId,
    validateBodyFaforite(schemas.updateFavoriteSchema),
    ctrl.updateStatusContact
);

module.exports = router;
