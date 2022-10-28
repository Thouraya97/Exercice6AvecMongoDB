const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Achat = Schema({
  
  boughtDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Achat", Achat);