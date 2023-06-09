const mongoose = require("mongoose");

const sugarSchema = mongoose.Schema({
  sugar_Name: { 
    type: String, 
  },
  sugar_form: { 
    type: String,
  },
  cost: {
    type: Number,
    min: [0, "Price must be min 0"],
    max: [100, "Price must be max 100"],
  },
});

module.exports = mongoose.model("sugar", sugarSchema);