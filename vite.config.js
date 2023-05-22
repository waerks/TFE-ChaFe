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
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                reserve: resolve(root, 'page/reserve.html'),
                kopi: resolve(root, 'page/kopi.html'),
                canvas: resolve(root, 'page/canvas.html')
            }
        }
    }
})