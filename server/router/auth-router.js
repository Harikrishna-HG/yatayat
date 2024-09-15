// const express = require('express');
// const router = express.Router();
// const {home, register, login,getUsers}= require("../controller/auth-controller")
// const authControllers = require("../controller/auth-controller");
// const validate = require("../middlewares/validate-middleware");
// const { signupSchema } = require("../validators/auth-validator");


// router.route("/").get(authControllers.home);

// router.route("/register")
// .post(validate(signupSchema),authControllers.register);
// router.route("/users").get(authControllers.getUsers); // Fetch all users


// router.route("/login").post(authControllers.login);



// module.exports = router;



////

const express = require('express');
const router = express.Router();
const { home, register, login, getUsers } = require("../controller/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signupSchema } = require("../validators/auth-validator");

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/users").get(getUsers);  // Route to fetch all users
router.route("/login").post(login);

module.exports = router;
