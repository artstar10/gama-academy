import { createServer } from "http"; // readicionando main
import { readFile } from "fs";
import { resolve } from "path"; // para localizar arquivos em diretórios
import { parse } from "querystring"; // para resolver problema de formatação

const server = createServer((request, response) => {
    switch (request.url) {
        case '/status': {
            response.writeHead(200, {
                'Content-Type': 'application/json',
            });
            response.write(
                JSON.stringify({
                    status: 'Okay',
                })
            );
            response.end();
            break;
        }
        case '/sign-in': {
            const path = resolve(__dirname, './pages/sign-in.html')
            readFile(path, (error, file) => {
                if(error){
                    response.writeHead(500, 'Cant\'t process HTML file.');
                    response.end();
                    return;
                }
                
                response.writeHead(200);
                response.write(file);
                response.end();
            });
            break;
        }
        case '/home': {
            const path = resolve(__dirname, './pages/home.html')
            readFile(path, (error, file) => {
                if(error){
                    response.writeHead(500, 'Cant\'t process HTML file.');
                    response.end();
                    return;
                }
                
                response.writeHead(200);
                response.write(file);
                response.end();
            });
            break;
        }
        case '/autenthicate': {
            let data = '';
            request.on('data', (chunk) => {
                data += chunk;
            });
            request.on('end', () => {
                const params = parse(data);
                response.writeHead(301, {
                    location: '/home',
                });
                response.end();
            });
            break;
        }
        default: {
            response.writeHead(404, 'Service not found/serviço não encontrado');
            response.end();
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000; // SETANDO PORTA DINÂNIMCA
const HOSTNAME = process.env.HOSTNAME || `127.0.0.1`; // SETANDO HOSTNAME DINÂNIMCO

server.listen(8000, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
})