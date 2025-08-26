import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()], // basicSsl()
	server: {
		// https: true,
		// host: 'localhost',
		// port: 5173,
		allowedHosts: true,
	},
})
