import { createServer } from 'http'
import { readFile } from 'fs/promises'
import { extname, join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
}

const server = createServer(async (req, res) => {
  let filePath = join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url)
  
  try {
    const ext = extname(filePath)
    const contentType = mimeTypes[ext] || 'application/octet-stream'
    
    const content = await readFile(filePath)
    
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(content, 'utf-8')
  } catch (error) {
    if (req.url === '/') {
      // Serve index.html for SPA routing
      try {
        const content = await readFile(join(__dirname, 'dist', 'index.html'))
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content, 'utf-8')
      } catch (e) {
        res.writeHead(404)
        res.end('File not found')
      }
    } else {
      res.writeHead(404)
      res.end('File not found')
    }
  }
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`🚀 Development server running at http://localhost:${PORT}`)
  console.log(`📁 Serving files from: ${join(__dirname, 'dist')}`)
})
