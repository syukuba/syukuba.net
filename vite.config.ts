import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '~bootstrap' : path.resolve(__dirname, 'node_modules/bootstrap')
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                sponsors: path.resolve(__dirname, 'sponsors.html'),
                volunteer: path.resolve(__dirname, 'volunteer.html'),
            }
        }
    },
    base: '/2024'
})
