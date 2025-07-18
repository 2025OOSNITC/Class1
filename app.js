const http = require('http'); //we are taking http module, need for communication
// It imports Node.js’s built-in http module, which allows you to create an HTTP server.
// function requestListner(req, res) {
//     console.log(req) 
// }
//req (the incoming request) and res (the response to send back).
const server = http.createServer(function requestListner(req, res) {
    console.log(req.url, req.headers, req.method)

    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html><title>BackEnd</title></html>')
        res.write('<body><h1>This is a Home Page</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (req.url == '/product') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<html><title>BackEnd</title></html>')
        res.write('<body><h1>Checkout these Products</h1></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<html><title>BackEnd</title></html>')
    res.write('<body><h1>This is not a Default URls</h1></body>')
    res.write('</html>')
    res.end()
}); //It creates an HTTP server using http.createServer and passes the requestListner function as the handler for incoming requests.

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
}); //server start listning at port 3000