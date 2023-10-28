const { Router } = require("express");
const router = Router();
const RegisterController = require("../controllers/RegisterController");

router.post("/Register", RegisterController.Register);

module.exports = router;