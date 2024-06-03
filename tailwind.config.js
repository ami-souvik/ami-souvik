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
        'background': '#ffffff',
        'background-dark': '#121212',
        'foreground': '#121212',
        'foreground-dark': '#ffffff',
        'inverse-background': {
          light: '#121212',
          dark: '#ffffff'
        },
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
