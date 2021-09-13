const http = require("http");
const os  = require("os");

http.createServer(function (request, response){

    console.log(request);

    response.write("<h1>Hello World</h1>");
    response.write("<p>User name in My OS: ");
    response.write(os.userInfo().username);
    response.write("</p>");
    response.end();
}).listen(3000);
