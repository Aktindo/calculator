module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          /* your theme name */ primary: "#f39c12" /* Primary color */,
          "primary-focus": "#e67e22" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#e74c3c" /* Secondary color */,
          "secondary-focus": "#c0392b" /* Secondary color - focused */,
          "secondary-content":
            "#ffffff" /* Foreground content color to use on secondary color */,

          accent: "#37cdbe" /* Accent color */,
          "accent-focus": "#2aa79b" /* Accent color - focused */,
          "accent-content":
            "#ffffff" /* Foreground content color to use on accent color */,

          neutral: "#3d4451" /* Neutral color */,
          "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#34495e" /* Base color of page, used for blank backgrounds */,
          "base-200": "#2c3e50" /* Base color, a little darker */,
          "base-300": "#d1d5db" /* Base color, even more darker */,
          "base-content":
            "#ffffff" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#009485" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,
        },
      },
    ],
  },
};
