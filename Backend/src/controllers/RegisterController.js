const Registe = require("../services/RegisterService");

const saveUser = async (req, res) => {
    try{
        if(await Registe.Register(req.body))
            res.status(201).send();
        else
            res.status(500).send();
    }catch(error){
        res.status(500).json({ "error": error});
    }
}
module.exports = {saveUser};