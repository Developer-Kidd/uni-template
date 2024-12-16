import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [uni()],
  // 环境变量配置路径
  envDir: 'src/env',
});
