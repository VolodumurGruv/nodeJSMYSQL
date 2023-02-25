const http = require("http");

const runServer = () => {
  
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h2>Server</h2>`);
  });
  
  server.listen(3030, () => console.log("Server runs on http://127.0.0.1:3030"));
}

module.exports = runServer;
