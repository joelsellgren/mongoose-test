const mongoose = require("mongoose")

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Ingredient", ingredientSchema)