import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for build
    chunkSizeWarningLimit: 2000,  // Increase the chunk size warning limit
    minify: 'terser',  // Minify using terser for better performance
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: If you want to set an alias for your `src` folder
    },
  },
  server: {
    port: 3000, // Change this to whatever port you'd like
    open: true,  // Auto open the app in the browser after running `npm run dev`
  },
});
