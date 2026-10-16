module.exports = {
  "content": [
    "./src/**/*.{ts,tsx}"
  ],
  "presets": [require("nativewind/preset")],
  "theme": {
    "extend": {
      "colors": {
        "cream": "#f6eedd",
        "ink": "#1e1b18",
        "card": "#ffffff",
        "primary": "#e24c2b",
        "gold": "#f2b705",
        "flame": "#f27405",
        "success": "#2e8b57",
        "danger": "#e4572e",
        "indigo": "#2d3a8c",
        "ink-muted": "#5c554b",
        "ink-faint": "#726a5d",
        "primary-text": "#b53d22",
        "histoire": "#f3d9a4",
        "geo": "#bfe3b0",
        "perso": "#c9c3f0",
        "decouverte": "#a9e0de",
        "accent-rose": "#f6c2d0"
      },
      "fontFamily": {
        "heading": [
          "Poppins"
        ],
        "body": [
          "Inter"
        ]
      },
      "borderRadius": {
        "card": "20px"
      },
      "boxShadow": {
        "card": "6px 6px 0px 0px #1e1b18",
        "sm": "4px 4px 0px 0px #1e1b18"
      }
    }
  },
  "plugins": []
};
