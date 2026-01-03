module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003366", 
        secondary: "#006699",
        background: "#ffffff",
        customText: "#333333"
      },
      fontFamily: {
        heading: ["Arial, sans-serif"],
        body: ["Verdana, sans-serif"]
      },
      borderRadius: {
        'custom': "4px"
      },
      spacing: {
        'base': "8px"
      }
    },
  },
  plugins: [],
}