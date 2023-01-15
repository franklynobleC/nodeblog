const Blog = require('../models/blogs')



//blog_index, blog_single, blog_create_get, blog_create_post, blog_delete



const blog_getall = (req, resp) => {
  Blog.find()
    .sort({ createdAt: -1 }) //sorts from the Newest to the oldest descending order
    .then(result => {
      // send this data  to  the  view  in the  index.html  file
      resp.render('./blogs/index', { title: 'All blogs', blogs: result })
    })
    .catch(err => {
      console.log(err)
    })
}




const blog_create_get = (req, resp)=> {
     //  resp.send('<p>About Page </P>')
     resp.render('./blogs/create', {title: 'create new Blog template'})

    }

    const blog_create_post = (req, resp) => {

            console.log( req.body);
   
        const blog = new Blog(req.body);
    
          blog.save()
          .then(()=> {
            console.log('saved  data ')
             resp.redirect('/blogs');
        
          })
          .catch(err => {
            console.log('error saving data', err)
          })
      
    
    }


//blog_index, blog_single, blog_create_get, blog_create_post, blog_delete



const blog_allblogs = (req, resp) => {
  Blog.find()
    .sort({ createdAt: -1 }) //sorts from the Newest to the oldest descending order
    .then(result => {
      // send this data  to  the  view  in the  index.html  file
      resp.render('./blogs/index', { title: 'All blogs', blogs: result })
    })
    .catch(err => {
      console.log(err)
      resp.status(404).render('404', {title: '404 Error'});
    })
}


const blog_single = (req, resp) =>{

    const id =  req.params.id;
    const blog = new Blog()  ;

    console.log(id)

        Blog.findById(id)
        .then(result => {
           console.log(result)

            resp.render('./blogs/details', {blog: result , title: 'Blog Details'} );

          
        })
        .catch(err =>{
           console.log('can  not get data  error')
           resp.status(404).render('404', {title: '404 Error'});
        })     

}

const blog_delete = (req,resp) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id) // finds  and  delete id  with its Objects
         .then(result => {
          console.log('deteleted item', result);
          resp.json({redirect: '/blogs'});
         }).catch(err => {
          console.log('error deleting blog', err);
          resp.status(404).render('404', {title: '404 Error'});
         });

}

module.exports =  {
    blog_allblogs ,   
    blog_create_get ,
     blog_create_get,
    blog_create_post ,
    blog_delete ,
    blog_single ,
}