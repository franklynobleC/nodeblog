const mongoose = require('mongoose')
const Schema = mongoose.Schema;



// a schema to describe the structure of the  blog properties (Database schema)
   
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,

    },
   snippet : {
    type: String,
    required: true 
   },
    body: {
        type: String,
        required: true
    }
},
    {timestamps: true})  // this would  automatically generate current  time  on the database as at when  this was  inserted


    // create a  model  based  on this  schema  and  it should  be  the singular  of the  collection  name 
    //which  would automatically find the plural  names associated  with the  Blog where  name  is blogs , in the  mongo db
    const Blog = mongoose.model('Blog', blogSchema)
  module.exports = Blog;   //export  the  blog  to be used  in the  project