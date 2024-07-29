import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '~bootstrap' : path.resolve(__dirname, 'node_modules/bootstrap')
        }
    }
})