/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#005eff",

          secondary: "#00bc33",

          accent: "#0000ff",

          neutral: "#3b1b1e",

          "base-100": "#e7fff8",

          info: "#1579ff",

          success: "#00ae85",

          warning: "#fcac00",

          error: "#e50034",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
