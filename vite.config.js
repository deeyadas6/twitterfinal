import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("bootstrap")) return "bootstrap";
            if (id.includes("mui")) return "mui-vendor";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit (optional)
  },
});
