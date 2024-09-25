import  federation  from '@originjs/vite-plugin-federation';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'TopBar',
      filename: 'remoteEntry.js',
      exposes: {
        './TopBar': './src/components/topbar/TopBar',
      },
      remotes: {
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3007, // Set the desired port here
  },
  preview: {
    port: 3007, // Set the desired port here
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