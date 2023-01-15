const { render } = require('ejs');
const  express = require('express');
const { default: mongoose } = require('mongoose');
const morgan = require('morgan');
// const Blog = require('./models/blogs');
const blogRoutes = require('./routes/blogRoutes');


const app = express();
app.use(express.urlencoded({extended: true})); // get  all the data from the User and encode it to

//Register View Engine

 app.set('view engine', 'ejs');


//connect  to  mongodb, mongo connection string
 const dbURL = 'mongodb+srv://nodemongo:test123@cluster0.aalstrf.mongodb.net/node-demo?retryWrites=true&w=majority'

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => console.log('connected to database'))
.catch(err => {
    console.log('can not connect to database', err )
})
app.listen(3000)



//middleware for static files
app.use(express.static('public'))

app.use(morgan('dev'))




//routes
app.get('/' ,( req , resp) => {
    resp.redirect('/blogs');
});


app.get('/about', (req, resp) => {
    resp.render('about', {title: 'About'});
});
  

//this would append /blogs to the url in the blogRoutes.js folder i.e '/blogs/create', '/blogs/:id'
app.use('/blogs', blogRoutes);
 

//Redirects
app.get('/about-us', (req, resp) => {
    //  resp.send('<p>About Page </P>')
    resp.redirect('/about');

});

//404 page , the use  func must be  the last  func  
app.use((req, resp) => {
    // resp.status(404).sendFile('./views/error.html', {root: __dirname})
    resp.status(404).render('404', {title: '404 Error'});
});
    