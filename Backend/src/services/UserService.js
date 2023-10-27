const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const userModel = mongoose.model("User", User);
const bcrypt = require("bcrypt");

const getAllUser = async () => {
    return await userModel.find({});
}

const getUser = async (id) => {
    return await userModel.find({ id: `${id}` })
}

const saveUser = async (user) => {
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

const updateUser = async (id, user) => {
    try{
        const updateResponse = await userModel.updateOne( 
            { id: `${id}`},
            {
               username: `${user.username}`,
               password: `${user.password}`
            }
         )
         if(updateResponse.modifiedCount > 0)
            return true;
         
        return false;
    }catch(error){
        console.log(error);
        return false;
    }
}

const deleteUser = async (id) => {
    try{
        const deleted = await userModel.deleteOne({ id: `${id}`});
        if(deleted.deletedCount > 0)
            return true;

        return false;
    }catch(error){
        console.log(error);
        return false;
    }
}


module.exports = { getAllUser, getUser, saveUser, updateUser, deleteUser};