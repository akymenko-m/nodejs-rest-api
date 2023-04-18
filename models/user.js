const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers/index");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, "Set password for user"],
        minlength: 6,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: emailRegexp,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: {
        type: String,
        default: "",
    },
});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
