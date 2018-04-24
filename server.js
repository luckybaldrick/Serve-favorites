
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server is listening on: http://localhost:" + PORT);
});

function handleRequest(req, res) {

    // Variable that will be changed based on the page being accessed.
    var file = "/index.html";

    // function to run the function to read whichever file is being accessed, index by default.
    function readFiles() {
        fs.readFile(__dirname + file, function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    var path = req.url;

    switch (path) {

        case "/food":
        // changes the variable to a new html file, then reruns the function to rerun the function to read the files.
            return (file = "/food.html"), readFiles();

        case "/movie":
            return (file = "/movie.html"), readFiles();

        case "/css":
            return (file = "/css.html"), readFiles();

        case "/index":
            return (file = "/index.html"), readFiles();
    };
// calls the function to rin the function to read the files
    readFiles();
}






