import { resolve } from "path"
import { defineConfig } from "vite"

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir,
        emptyOutDir: true,
        sourcemap: true,
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                reserve: resolve(root, 'reserve.html'),
                kopi: resolve(root, 'kopi.html'),
                canvas: resolve(root, 'canvas.html')
            },
            output: {
                // chunkFileNames: 'assets/js/[name]-[hash].js',
                // entryFileNames: 'assets/js/[name]-[hash].js',
                
                assetFileNames: ({name}) => {
                  if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                      return 'assets/[name]-[hash][extname]';
                  }
                  
                  if (/\.css$/.test(name ?? '')) {
                      return 'assets/[name]-[hash][extname]';   
                  }

                  if (/\.js$/.test(name ?? '')) {
                    return 'assets/[name]-[hash][extname]';   
                }
         
                  // default value
                  // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                  return 'assets/[name]-[hash][extname]';
                },
            },
            globals: {
                jquery: 'window.jQuery',
                jquery: 'window.$'
             }
        }
    }
})