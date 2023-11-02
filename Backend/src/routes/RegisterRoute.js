const { Router } = require("express");
const router = Router();
const RegisterController = require("../controllers/RegisterController");
const UserValidator = require("../middleware/UserValidator");

router.get("/register", RegisterController.registeAllUser);
router.post("/register",UserValidator, RegisterController.saveUser);

module.exports = router;