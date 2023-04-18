const { HttpError } = require("../helpers");

const validateQuery = (schema) => {
    const func = (req, res, next) => {
        if (req.query.favorite) {
            const { error } = schema.validate(req.query);

            if (error) {
                next(HttpError(400, "Incorrect value favorite"));
            }
        }

        next();
    };

    return func;
};

module.exports = validateQuery;
