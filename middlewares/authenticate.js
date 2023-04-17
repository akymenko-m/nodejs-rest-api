const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { HttpError } = require("../helpers");
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    // console.log(authorization);
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
        next(HttpError(401, "Not authorized"));
    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        // console.log("id", id);
        // console.log(token, SECRET_KEY);

        const user = await User.findById(id);
        // console.log("user", user);

        if (!user || !user.token || user.token !== token) {
            next(HttpError(401, "Not authorized"));
        }
        req.user = user;
        // console.log(req.user);
        next();
    } catch {
        next(HttpError(401));
    }
};

module.exports = authenticate;
