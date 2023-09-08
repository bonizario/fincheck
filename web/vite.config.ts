import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@view': path.resolve(__dirname, './src/view'),
    },
  },
});
