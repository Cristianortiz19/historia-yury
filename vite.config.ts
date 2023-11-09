import { resolve } from "path";
import { defineConfig} from "vite";


const root = resolve(__dirname, 'historias')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build:{
        outDir,
        emptyOutDir:true,
        rollupOptions: {
            input:{
                main: resolve(root, 'index.html'),
                "historia-yury": resolve(root, 'historia-yury/', 'index.html'),
                "historia-bicky": resolve(root, 'historia-bicky/', 'index.html'),
                "historia-maison-david": resolve(root, 'historia-maison-david/', 'index.html'),
            }
        },
        target: 'esnext'
    }
})