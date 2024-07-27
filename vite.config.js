import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/keeper2/", // Replace <repository-name> with the actual name of your repository
    plugins: [react()],
});
