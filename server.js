// const http = require('http');

// const fs = require('fs'); 
// const path = require('path');
// const _ = require('lodash')


// //create  a http server
// const server = http.createServer((req, resp) => {
//       const  rand = _.random(20)
//       console.log(rand.toString())
 
//     console.log('request made');
//     // console.log(req.url, req.method)
//     resp.setHeader('Content-Type', 'text/html');
      
//     //send  html file 
//     // fs.readFile('./views/index.html', (err, data ) => {
       
//        let path = './views/';

//        switch(req.url){ // check the  url
//         case '/' :   //here  url  path matching
//             path += 'index.html';
//             resp.statusCode = 200;
//             break;
//          case '/about':
//             path += 'about.html';
//             resp.statusCode = 200;
//             break;
//             case '/about':
//                 path += 'about.html';
//                 resp.statusCode = 200;
//                 break;    
//         default: 
//             path += 'error.html';
//             resp.statusCode = 404;
//             break;
//        }
       
        
        
   


//     fs.readFile(path, (err, data ) => {
      
//    if  (err) {
//     console.log(err)

//    }else {
//     resp.end(data)
//    }
// });

//     // resp.end()    
     
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on pot 3000');

// })