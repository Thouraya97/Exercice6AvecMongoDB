import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image : {
    type:String , 
    required: true 
  },
  
  wallet: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("User", User); 
