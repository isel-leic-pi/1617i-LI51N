'use strict';

var http = require("http")



function Options(id) {
    this.host = "api.football-data.org"
    this.path = "/v1/soccerseasons/{id}/leagueTable".replace("{id}", id);
};


var leagues = ["439", "430", "436"];

leagues.forEach(prepareRequest)




function prepareRequest(id) {
    console.log("prepareRequest with:" + id)
    makeRequest(new Options(id), processResult);

}

//makeRequest(options, processResult);



function processResult(e, result) {
    console.log(result.standing[0].teamName);
}


function makeRequest(options, cb) {
    console.log("options %j", options);

    let req = http.request(options, processResponse);

    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });

    req.end();

    function processResponse(res) {
        let response = "";
        res.on('data', chunk => response += chunk);

        res.on('end', () => cb(null, JSON.parse(response)));
        res.on('error', (e) => cb(e))

        //console.log(response);
    }
}







