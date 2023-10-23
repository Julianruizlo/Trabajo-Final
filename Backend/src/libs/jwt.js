import {TOKEN_SECRET} from "../config.js"
import jwt from "jsonwebtoken";
function createAccesToken(payload) {
    new Promise((resolve,reject) => {
    jwt.sign(
        payload,
        TOKEN_SECRET,
    "secret123",   

    {
        expiresIn: "1d",
    },
    (err,token) => {
        if(err) reject(err);
        resolve(token);
    
    }
    );
});
}