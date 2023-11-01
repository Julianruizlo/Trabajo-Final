const { Router } = require("express");
const router = Router();
const RegisterController = require("../controllers/RegisterController");
const UserValidator = require("../Middleware/ProductValidator");

router.post("/Register",UserValidator, RegisterController.saveUser);

module.exports = router;