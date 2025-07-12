import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
});

// tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
//   theme: {
//     extend: {
//       animation: {
//         'bounce-once': 'bounce-once 1s ease-out',
//       },
//       keyframes: {
//         'bounce-once': {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '30%': { transform: 'translateY(-20px)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

