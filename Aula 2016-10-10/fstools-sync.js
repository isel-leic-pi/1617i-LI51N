var fs = require('fs');

/**
 * Returns an array of strings with all the files
 * in the given path.
 *
 * REMARKS: This functions assumes that the path argument
 * represents a directory. If that is not the case,
 * its behaviour is undefined.
 * @param path an array of strings with all the files
 * in the given path
 */
module.exports.listFiles = function (path) {

    var dirContents =  fs.readdirSync(path);

    var fileObjs = [];

    dirContents.forEach((fileName) => fileObjs.push({ fileName: fileName, firstLine: getFirstLine(fileName)}))

    return fileObjs;
};

function getFirstLine(fileName) {
    if(fs.lstatSync(fileName).isDirectory()) {
        return "<DIR>";
    }

    let fileContents = fs.readFileSync(fileName).toString();

    let re = /.*/;
        let firstLine = re.exec(fileContents)[0];

    return firstLine;


}


