import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@assets/*': path.resolve(__dirname, 'src/assets/*'),
      '@atoms/*': path.resolve(__dirname, 'src/components/atoms/*'),
      '@molecules/*': path.resolve(__dirname, 'src/components/molecules/*'),
      '@organisms/*': path.resolve(__dirname, 'src/components/organisms/*'),
      '@pages/*': path.resolve(__dirname, 'src/pages'),
      '@template/*': path.resolve(__dirname, 'src/template/*')
    }
  }
});
