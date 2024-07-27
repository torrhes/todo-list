import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      atoms: "/src/components/atoms",
      molecules: "/src/components/molecules",
      organisms: "/src/components/organisms",
      pages: "/src/components/pages",
      template: "/src/components/template",
    },
  },
});
