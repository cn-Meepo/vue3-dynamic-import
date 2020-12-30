import type {UserConfig} from 'vite';
import dynamicImportTransform from "./src/router/dynamicImportTransform";

const path = require('path')


const viteConfig: UserConfig = {
    /* 端口号 */
    port: 3555,
    /* hostname */
    hostname: 'localhost',
    /* 运行自动打开浏览器 */
    open: false,
    alias: {
        '/@/': path.resolve(__dirname, './src'),
        '/@views/': path.resolve(__dirname, './src/views'),
        '/@components/': path.resolve(__dirname, './src/components'),
        '/@utils/': path.resolve(__dirname, './src/utils'),
    },
    /* proxy */

    proxy: {

        // '/api': {
        //     target: 'https://uni937d4b0-6cc760.service.tcloudbase.com',
        //     changeOrigin: true,
        //     ws: true,
        //     rewrite: path => path.replace(/^\/api/, '')
        // }
    },
    transforms: [
        dynamicImportTransform(), // 生产build时进行这个操作
    ]
};

export default viteConfig;
