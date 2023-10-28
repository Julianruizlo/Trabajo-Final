const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  id:{
    type: String,
    required: true
  },

    username: {
        type: String,
        required: true,
        trim: true,
      },
      
      password: {
        type: String,
        required: true,
      },
    },
   
   {collection: "users"});
  
  module.exports = User;