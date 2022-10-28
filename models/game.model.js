const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Game = Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image : {
    type:String , 
    required: true 
  },
  quantity: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("Games",Game); 

