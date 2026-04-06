const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const cleanRedirects = {
    '/servicios.html': '/servicios/',
    '/portafolio.html': '/portafolio/',
    '/precios.html': '/precios/',
    '/about.html': '/about/',
    '/blog.html': '/blog/',
    '/contacto.html': '/contacto/',
    '/proceso.html': '/proceso/',
    '/blog-desarrollo-web-mexico.html': '/blog-desarrollo-web-mexico/',
    '/index.html': '/'
  };

  if (cleanRedirects[req.url]) {
    res.writeHead(301, { Location: cleanRedirects[req.url] });
    res.end();
    return;
  }

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // Si es un directorio, servir index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Si no tiene extensión, intentar .html
  if (!path.extname(filePath)) {
    const htmlPath = filePath + '.html';
    if (fs.existsSync(htmlPath)) {
      filePath = htmlPath;
    }
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }

    const ext = path.extname(filePath);
    const contentType = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.ico': 'image/x-icon'
    }[ext] || 'text/plain';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
