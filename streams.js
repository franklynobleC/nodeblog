const fs = require('fs');


const readStream = fs.createReadStream('./docs/blogs3.txt', {encoding: 'utf-8'});
const writeStream = fs.WriteStream('./docs/blogs4.txt');

// readStream.on('data', (smalldata) => {
//     console.log('\n---NEW CHUNK ----')
    
//      writeStream.write("\n NEW CHUNK \n");
//      writeStream.write(smalldata)  
// });

//piping
//open  the readstream and  open the data and  write to writestream using piping
readStream.pipe(writeStream);