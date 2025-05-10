// vite.config.js
import tailwindcss from '@tailwindcss/vite';
import { globSync } from 'glob';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// Busca todos los archivos HTML en la raíz y en la carpeta /pages
// Ajusta los patrones si tu estructura es diferente
const htmlFiles = globSync([
  resolve(__dirname, 'index.html'),      // Incluye el index.html principal
  resolve(__dirname, 'pages/**/*.html'), // Incluye todos los .html dentro de /pages y sus subcarpetas
]);

// Genera el objeto de entrada para Rollup dinámicamente
const input = htmlFiles.reduce((acc, file) => {
  // Crea una clave para cada entrada. Para index.html usa 'main'.
  // Para los archivos en /pages, usa la ruta relativa sin la extensión.
  // Ejemplo: 'pages/about.html' -> 'pages/about'
  // Ejemplo: 'pages/docs/intro.html' -> 'pages/docs/intro'
  let key = 'main'; // Clave por defecto para index.html
  if (!file.endsWith('index.html')) {
    key = file.replace(resolve(__dirname, '') + '/', '').replace('.html', '');
  }

  acc[key] = file;
  return acc;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      // Usa el objeto 'input' generado dinámicamente
      input: input,
    },
  },
  // ... otras configuraciones (server, base, etc.)
});

