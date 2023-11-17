module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./**/*.tsx"],
  theme: {
    screens: {
      md: "1000px",
      lg: "1280px"
    },
    fontFamily: {
      serif: ["Merriweather", "Georgia"]
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(160, 111, 186, 1) 0%, 50%, rgba(133, 90, 162, 1) 100%)"
      },
      gridTemplateRows: {
        media: "530px 400px 530px"
      },
      colors: {
        grey: "#F3F3F3",
        purple: "#685275",
        green: "#24DF6F"
      },
      fontSize: {
        base: "15px"
      },
      keyframes: {
        left: {
          "0%": {
            transform: "translate(50px)"
          },
          "100%": { transform: "translate(0)" }
        },
        right: {
          "0%": {
            transform: "translate(-50px)"
          },
          "100%": { transform: "translate(0)" }
        }
      },
      animation: {
        "slide-left": "left 1s ease-in forwards",
        "slide-right": "right 1s ease-in forwards"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
