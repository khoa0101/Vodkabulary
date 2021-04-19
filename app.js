// server setup
const path = require("path");
const express = require("express");
const app = express();

// mongoose database setup
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// schema imports
const User = require("./models/User");

// route imports
const users = require("./routes/api/users");

// express middleware
app.use(express.json()); // replaces body parser
app.use(express.urlencoded({ extended: true }));

// passport middleware setup
const passport = require("passport");
app.use(passport.initialize());
require("./config/passport")(passport);

// routes
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
app.use("/api/users", users);

// port setup
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
