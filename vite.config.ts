import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
      include: '**/*.svg?react',
    }),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.stories.ts', '**/*.test.tsx'],
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/index.css',
          dest: '',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      fileName: (format) => `index.${format}.js`,
      name: 'stranger-storybook',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
