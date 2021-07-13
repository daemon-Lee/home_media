import fs from 'fs';
import path from 'path';

console.log("this is try feature. Just testing")

const dir_path = path.join(__dirname, "../media") 
fs.readdir(dir_path, (err, files) => {
    if (err) {
        return console.log("Unable to read diresctory" + err);
    }
    files.forEach( (file) => {
        console.log(file)
    })
})
