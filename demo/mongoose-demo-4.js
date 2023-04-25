const mongoose = require("mongoose")

const authorSchema = mongoose.Schema({
    name: String,
    birthYear: Number,
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
})

const bookSchema = mongoose.Schema({
    title: String,
    numberOfPages: Number,
    author: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        }
    ]
})

const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);

main().catch(err => console.log(err))

async function main(){
    await mongoose.connect("mongodb://0.0.0.0:27017/mongoose-demo-4")

    const jkr = await Author.findOne({name: "JKR"})

    const harryP1 = new Book({
        title: "Harry P 1",
        numberOfPages: 13,
        author: jkr._id
    })

    await harryP1.save()

    jkr.books.push(harryP1._id)

    await jkr.save()

    console.log("Done!")
}

async function addAuthors(){
    const jkrAuthor = new Author({
        name: "JKR",
        birthYear: 1802
    })

    await jkrAuthor.save()

    const jrrAuthor = new Author({
        name: "JRR",
        birthYear: 1302
    })

    await jrrAuthor.save()
}