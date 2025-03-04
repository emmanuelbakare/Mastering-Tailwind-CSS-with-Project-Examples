module.exports = {
  content: ["./src/**/*.{html, js, jsx}"],
  theme: {
    extend: {
      keyframes: {
        rotator: {
          "0%, 100%": { transform: "rotate(0deg) translateX(0)" },
          "50%": { transform: "rotate(20deg) translateX(-70px)" },
        },
      },
      animation: {
        "rotate-20": "rotator 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
