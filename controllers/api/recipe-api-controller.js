const Recipe = require("../../models/recipe-model")

module.exports = {

    // Get all ingredients
    getAll: async (req, res) => {
        try {
            console.log("getting ingredients")
            const recipes = await Recipe.find()
            res.send(recipes)
        } catch (err) {
            res.status(500).send(err.message)
        }
    },

    // Get one ingredient

    getOne: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id)
            res.send(recipe)
        } catch (err) {
            res.status(500).send(err.message)
        }
    },

    // Create ingredient
    create: async (req, res) => {
        const recipe = new Recipe({
            title: req.body.title,
            instructions: req.body.instructions
        })
        try {
            await recipe.save()
            res.status(201).send(recipe)
        } catch (err) {
            res.status(400).send(err.message)
        }
    },

}