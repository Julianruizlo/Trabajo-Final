const Registe = require("../services/RegisterService");
const { validationResult } = require("express-validator");
const saveUser = async (req, res) => {
    const errorResult = validationResult(req).array();
    try{
            if(errorResult && errorResult.length > 0){
                const message = errorResult[0].path + errorResult[0].msg;
                const errorMessage = { error: { message } };
                res.status(400).send(errorMessage);
            }
            else{
                const response = Registe.Register(req.body.name, req.body.description);
                if (response) {
                    res.send("Usuario cargado");
                }}
    }catch(error){
        res.status(500).send("Error al cargar el producto");
    }
}
module.exports = {saveUser};