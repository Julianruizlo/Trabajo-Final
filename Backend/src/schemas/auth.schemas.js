const express = require('express');
const { body, validationResult } = require('express-validator');
const { registerSchema, loginSchema } = require('./tu-esquema'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  '/register',
  [
    body('username').custom((value) => {
      return registerSchema.parseAsync({ username: value }).then(() => true).catch((error) => error.issues);
    }),
    body('email').custom((value) => {
      return registerSchema.parseAsync({ email: value }).then(() => true).catch((error) => error.issues);
    }),
    body('password').custom((value) => {
      return registerSchema.parseAsync({ password: value }).then(() => true).catch((error) => error.issues);
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

 
    const { username, email, password } = req.body;

    

    res.json({ message: 'Registro exitoso' });
  }
);

app.post(
  '/login',
  [
    
    body('email').custom((value) => {
      return loginSchema.parseAsync({ email: value }).then(() => true).catch((error) => error.issues);
    }),
    body('password').custom((value) => {
      return loginSchema.parseAsync({ password: value }).then(() => true).catch((error) => error.issues);
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

  
    const { email, password } = req.body;

 
    res.json({ message: 'Inicio de sesión exitoso' });
  }
);

app.listen(4000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});