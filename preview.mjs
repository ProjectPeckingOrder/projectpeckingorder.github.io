import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain'};
http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url, 'http://127.0.0.1:4173');
    const file = path.resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
    if (!file.startsWith(root + path.sep)) {res.writeHead(403).end(); return;}
    const body = await readFile(file);
    res.writeHead(200, {'Content-Type':mime[path.extname(file)] ?? 'application/octet-stream', 'Cache-Control':'no-store'}).end(body);
  } catch { res.writeHead(404).end(); }
}).listen(4287,'127.0.0.1',()=>console.log('Website preview: http://127.0.0.1:4287'));
