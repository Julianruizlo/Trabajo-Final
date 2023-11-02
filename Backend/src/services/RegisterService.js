const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const userModel = mongoose.model("User", User);
const bcrypt = require("bcrypt");


const registeAllUser = async () => {
    return await userModel.find({});
}

const Register = async (user) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = bcrypt.hashSync(user.password, salt);
        user = {
            ...user,
            id: uuidv4(),
            password: passwordHashed
        };
        const userCreated = await userModel.create(user);
        if(userCreated)
            return true;
        
        return false;
    }catch(error){
        console.log(error);
        return false;
    }
}
module.exports = { Register,registeAllUser };