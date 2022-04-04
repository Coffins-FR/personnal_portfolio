import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl(
      exclude = undefined,                         // RegExp | RegExp[] of file paths/extentions to ignore
      include = /\.(glsl|wgsl|vert|frag|vs|fs)$/i, // RegExp | RegExp[] of file paths/extentions to import
      defaultExtension = 'glsl'                    // Shader import suffix when no extension is specified
    )
  ]
})
