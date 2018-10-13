const fs = require('fs');

 module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
 
    console.log(filesToString);
   });
 };

 module.exports.touch = () => {
   var data = "New file was created\n";
    fs.writeFileSync("newFile.txt", data);
    console.log('New File was Created.');
 };

 module.exports.mkdir = () => {
    fs.mkdir('New_Directory', (err) => {
      if (err) {
        return err;
      };
    });
          
    console.log('New Directory was made.');
};
