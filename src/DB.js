// const express = require("express");
// const mongoose = require("mongoose");

// const uri = "mongodb://localhost:27023/database";
// const port = 3001;
// const app = express();

// async function main() {
//   await mongoose
//     .connect(uri, {})
//     .then((result) => console.log("database connected"))
//     .catch((err) => console.log(err));
// }

// main();

// app.get("/", (req, res) => {
//   res.send("<h1>database connected </h1>");
// });

// app.listen(port, () => {
//   console.log("server is running at port " + port);
// });

// const Schema = mongoose.Schema;

// const userSchema = new mongoose.Schema(
//   {
//     first_name: String,
//     last_name: String,
//     email: String,
//     password: String,
//   },
//   { collection: "User" }
// );

// const User = mongoose.model("User", userSchema);

// async function query() {
//   await User.find(first_name: "Alexis");
// }

// query();
