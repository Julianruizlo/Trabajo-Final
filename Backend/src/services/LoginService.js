const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const userModel = mongoose.model("User", User);
const bcrypt = require("bcrypt");
const SECRET_JWT_KEY = "holand";
const jwt = require("jsonwebtoken");

const login = async (user) => {
    try{
        console.log("usurio",user)
    const userResponse = await userModel.findOne({ username: `${user.username}` });
    let token = null;
    if(userResponse && bcrypt.compareSync(user.password, userResponse.password)){
        token = jwt.sign({ username: user.username }, SECRET_JWT_KEY, { expiresIn: "99s"} );
    }
    return token;
    }catch(error){
        console.log(error);
    }
}

module.exports = { login };