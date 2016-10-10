var fs = require('fs');


module.exports.listFiles = function (path, cb) {

    fs.readdir(path, function (e, dirContents) {
        if(e) cb(e);

        var fileObjs = [];
        dirContents.forEach((fileName) => fileObjs.push({ fileName: fileName, firstLine: getFirstLine(fileName)}))

        cb(null, fileObjs);

    });
};



function getFirstLine(fileName, cb) {
    fs.lstat(fileName, processLstat)


    function processLstat(e, stats) {
       if(stats.isDirectory())
           cb(null, "<DIR>")

        fs.readFile(fileName, processFile)
    }

    function processFile(e, fileContents) {
        let re = /.*/;
        let firstLine = re.exec(fileContents.toString())[0];

        cb(null, firstLine);

    }
}


