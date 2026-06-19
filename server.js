const http = require('http');
const fs = require('fs');
const path = require('path');
const mimeTypes = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.mp3':'audio/mpeg','.mtn':'application/octet-stream','.moc':'application/octet-stream','.moc3':'application/octet-stream','.motion3.json':'application/json','.physics3.json':'application/json','.model3.json':'application/json','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.eot':'application/vnd.ms-fontobject'};
const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found: ' + filePath); return; }
        res.writeHead(200, {'Content-Type': contentType, 'Access-Control-Allow-Origin': '*'});
        res.end(data);
    });
});
const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => console.log('Server running at http://localhost:' + PORT));
