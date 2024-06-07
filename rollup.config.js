import { defineConfig } from "rollup";
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "preDiction",
    },
    external: ["react", "react-dom", "axios"],
    plugins: [typescript({ tsconfig: "tsconfig.json" })],

})