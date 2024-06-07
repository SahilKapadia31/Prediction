import { defineConfig } from "rollup";
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "prediction-filter",
    },
    external: ["react", "react-dom", "axios"],
    plugins: [typescript({ tsconfig: "tsconfig.json" })],

})