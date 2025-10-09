import { defineConfig } from 'vite'
import fg from 'fast-glob'
import ViteRestart from 'vite-plugin-restart'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

const components = Object.fromEntries(
  fg.sync('src/vue/webcomponents/*.ce.ts').map(file => {
    const name = file.split('/').pop().replace('.ce.ts', '')
    return [name, file]
  }),
)

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',

  build: {
    sourcemap: false,
    emptyOutDir: true,
    manifest: true,
    outDir: 'web/dist/',

    rollupOptions: {
      input: {
        app: 'src/js/app.js',
        ...components,
      },
      output: {
        entryFileNames: (chunk) =>
          chunk.name.includes('webcomponents/')
            ? `webcomponents/${chunk.name}.js`
            : 'assets/[name]-[hash].js',
      },
    },
  },

  plugins: [
    tailwindcss(),
    vue({
      template: {
        compilerOptions: {
          // alle Tags mit Bindestrich als echte Custom Elements behandeln
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    ViteRestart({
      restart: ['templates/**/*'],
    }),
  ],

  publicDir: './src/public',

  server: {
    // host: '0.0.0.0',
    // port: 3000,
    // origin: 'https://craftcms-lazy.ddev.site:3000',
    // cors: true,
    allowedHosts: true,
    cors: {
      origin:
        /https?:\/\/([A-Za-z0-9\-\.]+)?(localhost|\.local|\.test|\.site)(?::\d+)?$/,
    },
    fs: {
      strict: false,
    },
    headers: {
      'Access-Control-Allow-Private-Network': 'true',
    },
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  },
}))
