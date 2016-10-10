let fstoolsSync = require('./fstools-sync')
let fstoolsAsync = require('./fstools-async')

console.log("---------- Sync version ------------")
var filesObj = fstoolsSync.listFiles(__dirname);
processFiles(filesObj);

console.log("---------- Async version ------------")

fstoolsAsync.listFiles(__dirname, (e, files) => processFiles(files));


function processFiles(filesObj) {
    filesObj.forEach(show);
}


function show(e) {
    console.log(e);
}

