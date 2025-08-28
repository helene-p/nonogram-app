import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './setup.js',
    include: ['**/*.test.{ts,tsx}'],
  },
});
