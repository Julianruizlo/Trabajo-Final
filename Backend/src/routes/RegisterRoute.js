const { Router } = require("express");
const router = Router();
const RegisterController = require("../controllers/RegisterController");

router.post("/Register", RegisterController.saveUser);

module.exports = router;