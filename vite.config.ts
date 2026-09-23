import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function imageUploadPlugin(): Plugin {
  return {
    name: 'image-upload-endpoint',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method === 'POST' && req.url && req.url.startsWith('/api/upload-sport-image')) {
          const urlObj = new URL(req.url, 'http://localhost');
          const sport = urlObj.searchParams.get('sport') || 'sda-doubles';
          const chunks: Buffer[] = [];
          
          req.on('data', (chunk) => {
            chunks.push(Buffer.from(chunk));
          });

          req.on('end', () => {
            try {
              const buffer = Buffer.concat(chunks);
              if (buffer.length > 0) {
                const targetDirs = [
                  path.resolve(__dirname, 'public/images/sports'),
                  path.resolve(__dirname, 'dist/images/sports'),
                  '/public/images/sports',
                ];

                for (const dir of targetDirs) {
                  try {
                    if (!fs.existsSync(dir)) {
                      fs.mkdirSync(dir, { recursive: true });
                    }
                    fs.writeFileSync(path.join(dir, `${sport}.jpg`), buffer);
                    if (sport === 'sda-doubles') {
                      fs.writeFileSync(path.join(dir, 'SDA DUBS.jpg'), buffer);
                    }
                  } catch {
                    // Ignore missing directory targets
                  }
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, size: buffer.length }));
                return;
              }
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Empty buffer' }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imageUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
