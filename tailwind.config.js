module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black_900_7f: "#0000007f",
        purple_100: "#d8aae9",
        white_A700_7f: "#ffffff7f",
        gray_50_bf: "#fcf6ffbf",
        amber_400: "#f7d618",
        red_800: "#ce1021",
        gray_101: "#f4f0fd",
        deep_purple_100: "#cbb6f8",
        gray_50: "#fcf6ff",
        gray_100: "#f5f5f5",
        white_A700_33: "#ffffff33",
        deep_purple_50: "#e5dafb",
        black_900_33: "#00000033",
        purple_600_bf: "#8e05c2bf",
        black_900: "#000000",
        purple_800_7f: "#700b977f",
        white_A700_bf: "#ffffffbf",
        purple_600_7f: "#8e05c27f",
        purple_900: "#3e065f",
        light_blue_A700: "#007fff",
        purple_800: "#700b97",
        white_A700: "#ffffff",
        purple_600: "#8e05c2",
        gray_50_7f: "#fcf6ff7f",
      },
      fontFamily: { lato: "Lato", inter: "Inter" },
      boxShadow: {
        bs1: "0px 4px  4px 0px #ffffff",
        bs: "-2px 2px  4px 0px #f5f5f5",
        bs2: "-4px 4px  10px 0px #f5f5f5",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
