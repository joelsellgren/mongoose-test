const Ingredient = require("./../../models/ingredient-model")

module.exports = {
    // Get all ingredients

    getAll: async (req, res) => {
        try {
            console.log("getting ingredients")
            const ingredients = await Ingredient.find()
            res.send(ingredients)
        } catch (err) {
            res.status(500).send(err.message)
        }
    },

    // Get one ingredient

    getOne: async (req, res) => {
        try {
            const ingredient = await Ingredient.findById(req.params.id)
            res.send(ingredient)
        } catch (err) {
            res.status(500).send(err.message)
        }
    },

    // Create ingredient
    create: async (req, res) => {
        const ingredient = new Ingredient({
            name: req.body.name,
            desc: req.body.desc
        })
        try {
            await ingredient.save()
            res.status(201).send(ingredient)
        } catch (err) {
            res.status(400).send(err.message)
        }
    },

    // Update
    // Delete
}