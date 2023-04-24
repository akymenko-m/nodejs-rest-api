const validateBody = require("./validateBody");
const validateBodyFaforite = require("./validateBodyFaforite");
const isValidId = require("./isValidId");
const validateBodyUsers = require("./validateBodyUsers");
const authenticate = require("./authenticate");
const validateQuery = require("./validateQuery");
const upload = require("./upload");

module.exports = {
    validateBody,
    isValidId,
    validateBodyFaforite,
    validateBodyUsers,
    authenticate,
    validateQuery,
    upload,
};
