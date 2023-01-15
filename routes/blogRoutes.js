const express = require('express');
// const Blog = require('../models/blogs');
//import all the controller  blogs 
const blogController = require ('../controller/blogController');

//create and  instance  of the router
const router = express.Router();

//create Blog, route swould take you to creating blog
router.get('/create', blogController.blog_create_get) 
//creates a  new Blog
router.post('/', blogController.blog_create_post );   

   // get a single request 
 router.get('/:id', blogController.blog_single);


 //delete a  blog
 router.delete('/:id', blogController.blog_delete);  
       

//get all blogs
router.get('/', blogController.blog_allblogs);

  module.exports = router; 