module.exports = {
  content: ["./src/**/*.{html, js, jsx}"],
  theme: {
    extend: {
      keyframes: {
        rotator: {
          "0%,50%, 100%": { transform: "rotate(0deg)" },
          "20%, 80%": { transform: "rotate(20deg)" },
        },
      },
      animation: {
        "rotate-20": "rotator 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

/* Transform(rotation)    0d-----20d--------0d--------20d----0d    */
/* Keyframes(%)           0|-----20-----40-----60-----80-----|100 */