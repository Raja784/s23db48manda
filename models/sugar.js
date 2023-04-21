const mongoose = require("mongoose")
const sugarSchema = mongoose.Schema({
sugar_Name: String,
sugar_form: String,
Cost: Number
})
module.exports = mongoose.model("sugar",sugarSchema)