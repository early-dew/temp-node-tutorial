const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
  res.end('Welcome to our home page')
}
if(req.url === '/about'){
  res.end('Here is our short history')
}
res.end(`<h1>Oops!</h1>
<p>WE can;t see to find the page you are looking for</p>
<a href="/">back home</>`)
})

server.listen(5000)