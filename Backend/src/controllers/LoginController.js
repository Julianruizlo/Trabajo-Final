const LoginService = require("../services/LoginService");

const login = async (req, res) => {
    try{
    const response = await LoginService.login(req.body);
    console.log("respuesta login:",response)
    if(response){
        res.setHeader("Authorization", response);
        res.send()
    }else{
        res.status(404).json({ "error": "incorrect user or password"});
    }
    }catch(error){
        res.status(500).json({ "error": error});
}

}

module.exports = { login };