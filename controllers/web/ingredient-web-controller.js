const Ingredient = require("./../../models/ingredient-model")

module.exports = {

    // Show all
    showAll: async (req, res) => {
        try {
            const ingredients = await Ingredient.find().lean()
            res.render("ingredients/index", {ingredients})
        } catch (err) {
            res.render("error", {message: err.message})
        }
    },
    // Show one
    showOne: async (req, res) => {
        try {
            const ingredient = await Ingredient.findById(req.params.id)
            res.render("ingredients/single", ingredient)
        } catch (err) {
            res.render("error", {message: err.message})
        }
    }
    // Show create form

    // Show edit form

    // Create ingredient

    // Update ingredient

    // Delete ingredient

}