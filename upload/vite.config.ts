import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'upload',
      filename: 'remoteEntry.js',
      exposes: {
        './MediaForm': './src/views/upload/MediaForm.tsx',
      },
      remotes: {
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
        topbar: 'http://localhost:3007/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3069, // Set the desired port here
  },
  preview: {
    port: 3069, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});