import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/246Competitions/', // Set the base path for GitHub Pages
  plugins: [
    react(), // React plugin
    tailwindcss(), // Tailwind CSS plugin
  ],
});