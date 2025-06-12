import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'C:\wamp64\www\PruebaLoginLaravel\resources\sass\app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
