import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        synonym: ["Synonym"],
        amulya: ["Amulya"],
      },
      screens: {
        md: "712px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        primary: "#6E00FF",
        background: "#EFF2F799",
        star: "#FFCB2B",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
});
export default config;
