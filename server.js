const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
    .connect(DB_HOST)
    .then(() => {
        console.log("Database connection successful");
        app.listen(PORT);
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
