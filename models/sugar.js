const mongoose = require("mongoose")
const sugarSchema = mongoose.Schema({
sugar_name: String,
sugar_form: String,
cost: Number
})
module.exports = mongoose.model("Sugar",
sugarSchema)