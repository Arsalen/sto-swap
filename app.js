const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");

const indexRouter = require("./src/routes/index");
const userRouter = require("./src/routes/user");

require('dotenv').config({path: '.env'});

const app = express();
app.set("trust proxy", 1);
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000, // 1 hour
      // secure: true, // Uncomment this line to enforce HTTPS protocol.
      sameSite: true
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/user", userRouter);

const listener = app.listen(process.env.PORT, function() {
  console.log("Listening on port " + listener.address().port);
});
