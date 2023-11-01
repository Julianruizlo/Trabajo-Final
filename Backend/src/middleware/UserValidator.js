const { body } = require("express-validator");

const UserValidator = [
    body('username').isString().notEmpty().withMessage('El nombre de usuario es obligatorio'),
  body('email').isEmail().withMessage('El correo electrónico no es válido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];


module.exports = UserValidator;