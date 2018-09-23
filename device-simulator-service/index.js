/*var Request = require("request");

Request.get("http://httpbin.org/ip", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});

*/
var Request = require("request");
var os = require('os');
var osUtils = require('os-utils');
var network = require('network');

function sendDetails() {
    let cpu_usage;
    osUtils.cpuUsage(function (v) {
        // console.log(bytesToSize(os.totalmem() - os.freemem()));
        // console.log(Math.round(v * 100) + '%');
        // console.log(os.hostname());
        // console.log(os.userInfo().username);
        // console.log(os.platform());
        let requestBody = {
            'free_memory': bytesToSize(os.totalmem() - os.freemem()),
            'cpu_usage': Math.round(v * 100) + '%',
            'hostname': os.hostname(),
            'username': os.userInfo().username,
            'os_platform': os.platform()
        }
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3000/devices",
            "body": JSON.stringify(requestBody)
        }, (error, response, response_body) => {
            if (error) {
                return console.dir(error);
            }
            console.log(response_body);
        });
    });
    // network.get_public_ip(function (err, ip) {
    //     console.log(ip);
    // })
    console.log('================');
}
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};
let timerId = setInterval(() => sendDetails(), 3000);
