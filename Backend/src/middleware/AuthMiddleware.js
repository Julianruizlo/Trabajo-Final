const UserService = require("../services/UserService");

const getAllUser = async (req, res) => {
    try{
        const response = await UserService.getAllUser();
        if(response && response.length > 0)
            res.json(response);
        else
            res.status(404).json({ "error": "Users not found"});
    }catch(error){
        res.status(500).json({ "error": error});
    }
}

const getUser = async (req, res) => {
    try{
        const id = req.params.id;
        const response = await UserService.getUser(id);
        if(response && response.length > 0)
            res.json(response);
        else   
            res.status(404).json({ "error": "Users not found"});
    }catch(error){
        res.status(500).json({ "error": error});
    }

}

const saveUser = async (req, res) => {
    try{
        if(await UserService.saveUser(req.body))
            res.status(201).send();
        else
            res.status(500).send();
    }catch(error){
        res.status(500).json({ "error": error});
    }
}

const updateUser = async (req, res) => {
    try{
        if(await UserService.updateUser(req.params.id, req.body))
            res.json({ "message": "user updated" })
        else
            res.status(500).json({ "message": "user not updated" })
    }catch(error){
        res.status(500).json({ "error": error});
    }
}

const deleteUser = async (req, res) => {
    try{
        if(await UserService.deleteUser(req.params.id))
            res.json({ "message": "user deleted" });
        else
            res.json({ "message": "user not deleted" });
    }catch(error){
        res.status(500).json({ "error": error});
    }
}

module.exports = { getAllUser, getUser, saveUser, updateUser, deleteUser};