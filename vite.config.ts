import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: true,
      port: 5175,
      proxy: {
        // Use this proxy to avoid CORS issues when using the API.
        // When developing locally, from the browser perspective, the API is hosted on the same origin (localhost).
        // On the real server, the API is hosted in the same origin so this proxy is not needed.
        '/api': {
          target: env.VITE_DEPLOYED_URL + '/api',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [svgr(), react()],
    base: '/markup-tool',
    resolve: {
      alias: {
        '#': path.resolve(__dirname, './src'),
      },
    },
  };
});
