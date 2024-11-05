import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(), 
      svgr({
        include: '**/*.svg?react',
      })
    ],
    resolve: {
      alias: {
        '@': '/src'
      },
    },
    define: {
      REACT_APP_OLLAMA_URL: env.VITE_APP_OLLAMA_URL,
    }
  }
})
