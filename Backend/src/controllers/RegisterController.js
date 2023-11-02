const registe = require("../services/RegisterService");
const { validationResult } = require("express-validator");



const registeAllUser = async (req, res) => {
    try{
        const response = await registe.registeAllUser();
        if(response && response.length > 0)
            res.json(response);
        else
            res.status(404).json({ "error": "Users not found"});
    }catch(error){
        res.status(500).json({ "error": error});
    }
}
const saveUser = async (req, res) => {
    const errorResult = validationResult(req).array();
    try{
            if(errorResult && errorResult.length > 0){
                const message = errorResult[0].path + errorResult[0].msg;
                const errorMessage = { error: { message } };
                res.status(400).send(errorMessage);
            }
            else{
                const response =registe.Register(req.body.name, req.body.description);
                if (response) {
                    res.send("Usuario cargado");
                }}
    }catch(error){
        res.status(500).send("Error al cargar el producto");
    }
}
module.exports = {saveUser, registeAllUser};