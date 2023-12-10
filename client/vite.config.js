import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
          external: ['framer-motion', 'react-icons/fa6', 'react-icons/ai', 'react-icons/bs', 'react-icons/fa', 'react-icons/gi','react-icons/md','react-calendar'],
        },
      },
});