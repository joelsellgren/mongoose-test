const mongoose = require("mongoose")

main().catch(err => console.log(err))

async function main(){

    const kittySchema = new mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        birthYear: Number
    })

    const Kitten = mongoose.model("Kitten", kittySchema)

    await mongoose.connect("mongodb://0.0.0.0:27017/mongoose-demo-1");

    const lambada = new Kitten({name: "Lambada", birthYear: 1990})
    await lambada.save()

    const albis = new Kitten({name: "Albis", birthYear: 1985})
    await albis.save()

    const kittens = await Kitten.find()

    console.log({kittens})

    console.log("Done!")
}

