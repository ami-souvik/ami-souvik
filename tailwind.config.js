const config = {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Outfit', 'system-ui'],
      'curvy': ['SignPainter']
    },
    extend: {
      colors: {
        'primary-main': '#121212',
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  plugins: [],
}

export default config;
