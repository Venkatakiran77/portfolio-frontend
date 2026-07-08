// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 5173,
    open: true,
    strictPort: false,
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    // Splits large vendor dependencies into separate chunks so the
    // initial JS payload stays small — directly supports the
    // "100 Performance" target and "Code Splitting" requirement
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['react-icons', 'lucide-react'],
        },
      },
    },
  },

  // Ensures .jsx files are correctly processed even when imported
  // without an explicit extension (e.g. import Button from './Button')
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
});