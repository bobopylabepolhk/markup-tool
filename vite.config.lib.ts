import * as path from 'path';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [svgr(), react(), libInjectCss()],
  build: {
    copyPublicDir: false,
    lib: { entry: path.resolve(__dirname, 'src/lib.ts'), formats: ['es'] },
    outDir: 'lib',
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
    },
  },
});
