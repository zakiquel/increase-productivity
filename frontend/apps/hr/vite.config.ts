import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/hr/',
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(
      'https://increase-productivity.abdrashitov-academy.ru/api',
    ),
  },
});
