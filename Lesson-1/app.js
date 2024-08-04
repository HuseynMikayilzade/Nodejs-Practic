const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res){
    if (req.url === '/') {
        fs.readFile('pages/home.html',function(err, html){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        })
    }else if(req.url === '/contact'){
        fs.readFile('pages/contact.html',function(err, html){          
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        })
    }else if(req.url === "/create" && req.method === "POST"){
        let body = '';
        req.on('data', chunk=>{
            body += chunk.toString();
        })
        req.on('end', ()=>{
            const parsedBody = new URLSearchParams(body);
            // console.log(parsedBody);      
            const name = parsedBody.get('name');
            const surname = parsedBody.get('surname');
            const phone = parsedBody.get('phone');
            const data = `Ad: ${name}\nSoyad: ${surname}\nTelefon: ${phone}\n\n`;
            fs.appendFile('./data/contactdata.txt', data, err => {               
                if (err) {
                    console.error(err);
                    res.writeHead(500, { "Content-Type": "text/html" });
                    res.end('error');
                } else {
                    res.writeHead(302, { Location: '/' });
                    res.end();
                }
            });
        })
     }
     else if(req.url === '/create'){
        fs.readFile("pages/contact.html", (err, html) => {
            if (err) {
                console.log(err);
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end('error');
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });       
    }
    else{
        fs.readFile('pages/notfound.html',function(err, html){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        })
    }   
}).listen(3000);