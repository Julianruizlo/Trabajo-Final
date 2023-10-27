const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/userSystem2"
const connection = mongoose.connection;

mongoose.connect(URL);
connection.once("open", () => console.log("BD conectado"));