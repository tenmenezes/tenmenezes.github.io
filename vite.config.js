import fs from "fs"
import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O GitHub Pages responde qualquer rota desconhecida com o 404.html da raiz.
// Copiando o index.html para 404.html, ele carrega a própria SPA, e o React Router
// decide o que mostrar: a página certa (ex.: F5 em /projects/x) ou a NotFoundPage.
function githubPagesSpaFallback() {
  let outDir
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      fs.copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
