const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        return res.end('welcome to our home page')
    }
    if(req.url === '/about'){
       return res.end('here is our short history')
    }
    return res.end(`<h1>Oops</h1>
    <a href='/'>Return to home</a>`)
})

server.listen(5000)
