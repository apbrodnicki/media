import { cloudflare } from '@cloudflare/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), cloudflare()],
	resolve: {
		alias: {
			'@client': resolve(__dirname, './src/client'),
			'@shared': resolve(__dirname, './src/shared'),
			'@worker': resolve(__dirname, './src/worker'),
		}
	}
});
