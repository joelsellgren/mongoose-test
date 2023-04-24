const mongoose = require("mongoose")
const { Schema, model } = mongoose; // mongoose.Schema & mongoose.model



const blogSchema = new Schema({
    title: String,
    tags: [String],
    comments: [{
      user: String,
      content: String,
      votes: Number
    }]
  });

  const Blog = model("Blog", blogSchema)

  main().catch(err => console.log(err))


  async function main(){
    await mongoose.connect("mongodb://localhost:27017/mongoose-demo-2")

    const blogPost = await Blog.findById("644640f10010b8729ea31e19")

    blogPost.comments.push({
        user: "Pelle",
        content: "Content 3",
        votes: 4
    })

    await blogPost.save()

    console.log(blogPost)

  }

  async function createBlogPost(){
    const blogPost = new Blog({
        title: "Blogpost 2",
        tags: ["tag1", "tag2"],
        comments: [
            {
                user: "Joel",
                content: "Content2",
                votes: 3
            }
        ]
    })
  }