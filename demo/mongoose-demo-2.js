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
    await mongoose.connect("mongodb://0.0.0.0:27017/mongoose-demo-2")
    
    console.log("Done");

  }

  async function createBlogPost() {
    const blogPost = new Blog({
      title: "Blogpost 4",
      tags: ["tag15,", "tag24"],
      comments: [
        {
          user: "Joel",
          content: "Content 5",
          votes: 3
        }
      ]
    })

    await blogPost.save()

  }

  async function updateBlogPost() {
    const blogPost = await Blog.findById("644780866725bbf59d719049")

    blogPost.comments.push({
      user: "Pelle",
          content: "Content 3",
          votes: 4
    })

    await blogPost.save()
  }

  async function deleteBlogPost(){
    await Blog.findOneAndDelete({_id:"64478ab9bcf04f512bd0d1d4"})
  }