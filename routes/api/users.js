const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const {
    validateBodyUsers,
    authenticate,
    upload,
} = require("../../middlewares");
const userSchema = require("../../schemas/users");

router.post("/register", validateBodyUsers(userSchema), ctrl.register);

router.post("/login", validateBodyUsers(userSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, ctrl.updateSubscription);

router.patch(
    "/avatars",
    authenticate,
    upload.single("avatar"),
    ctrl.updateAvatar
);

module.exports = router;
