import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import presets from './presets/presets';

// https://vitejs.dev/config/
export default defineConfig((env) => {
  // env environment variable
  const viteEnv = loadEnv(env.mode, process.cwd());

  return {
    base: viteEnv.VITE_BASE,
    // plugin
    plugins: [presets(env)],
    // settings
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'), // Point @ to the src directory
      },
    },
    // service settings
    server: {
      host: true, // Only when the host is set to true can the form of network be used to access the project with ip
      port: 8080, // port number
      open: true, // automatically opens the browser
      cors: true, // Cross domain settings allow
      strictPort: true, //If the port is occupied, exit directly
      // interface proxy
      proxy: {
        '/api': {
          // Interface of local 8000 front-end code Proxy to service port of 888
          target: 'http://localhost:8888/',
          changeOrigin: true, // allow cross-domain
          rewrite: (path) => path.replace('/api/', '/'),
        },
      },
    },
    build: {
      reportCompressedSize: false,
      // Eliminate warnings about bundle size exceeding 500kb
      chunkSizeWarningLimit: 2000,
      minify: 'esbuild',
      assetsDir: 'static/assets',
      // Static resources are packaged into different directories under dist
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    css: {
      preprocessorOptions: {
        // Files that import scss globally
        scss: {
          additionalData: `
          @import "@/assets/styles/variables.scss";
        `,
          javascriptEnabled: true,
        },
      },
    },
  };
});
