/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        main: ["Pretendard"],
      },
      colors: {
        main: "#22272E",
        border: "#444C56",
        text: "#758290",
        bg: "#2D333B",
        "jandi-none": "#444C56",
        "jandi-1": "#ACE7AE",
        "jandi-2": "#69C16D",
        "jandi-3": "#539F58",
        "jandi-4": "#386D3E",
      },
    },
  },
  plugins: [],
};
