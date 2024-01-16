const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){

        res.write('Welcome to our home page')
        res.end()

    } else if (req.url ==='/about'){

        res.write('Here is our short story')
        res.end()

    } else {  

    res.write('<h1> Ooops ! </h1>')
    res.end()

    }
    
})

server.listen(5000)