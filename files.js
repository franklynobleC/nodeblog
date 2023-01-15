const { error } = require('console');
const fs = require('fs');
 fs.readFile


 //Read from file 
// fs.readFile('./docs/blogss.txt', (err, data) => {
//     // throw new Error('error reading file');

//     if (err){
//         console.log(err, 'error')
//     }
//     console.log(data.toString());
// });

// console.log('last line')

   // create a file and write to it
// fs.writeFile('./docs/blogs.txt', 'add more blogs for check',() => {
//     console.log('file returned')
// })

//directories

 if(!fs.existsSync('./docs1')) {

fs.mkdir('./docs1', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');

})
 }else {
    fs.rmdir('./docs1', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
 }

 //delete files

 if (fs.existsSync('./docs1/deletme.txt')) {

 fs.unlink('/docs1/deleteme.txt', (err) => {
      if (err) {
        console.log()
      } 
      console.log('file deleted')
 })

 }
   