module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
				"10h": "10vh",
				"20h": "20vh",
				"30h": "30vh",
				"40h": "40vh",
				"50h": "50vh",
				"60h": "60vh",
				"70h": "70vh",
				"80h": "80vh",
				"90h": "90vh",
				"100h": "100vh",
        "400px": "400px",
        "500px": "500px",
			},
      width: {
				"10w": "10vw",
				"20w": "20vw",
				"30w": "30vw",
				"40w": "40vw",
				"50w": "50vw",
				"60w": "60vw",
				"70w": "70vw",
				"80w": "80vw",
				"90w": "90vw",
				"100w": "100vw",
			},
      boxShadow: {
        'var1': "var(--shadow-1)",
        'var2': "var(--shadow-2)",
        'var3': "var(--shadow-3)",
        'var4': "var(--shadow-4)",
      },
      maxWidth: {
        'maxvar': "var(--max-width)",
      },
      minHeight: {
        'minvar': "calc(100vh - (6rem + 4rem))",
      },
      borderRadius: {
        'radius': "var(--borderRadius)",
      },
      transitionProperty: {
        'tvar': "var(--transition)",
      },
      letterSpacing: {
        'letterSpacing': "var(--letterSpacing)", 
      },
      colors: {
        'primary-0': "var(--primary-0)",
        'primary-50': "var(--primary-50)",
        'primary-100': "var(--primary-100)",
        'primary-200': "var(--primary-200)",
        'primary-300': "var(--primary-300)",
        'primary-400': "var(--primary-400)",
        'primary-500': "var(--primary-500)",
        'primary-600': "var(--primary-600)",
        'primary-700': "var(--primary-700)",
        'primary-800': "var(--primary-800)",
        'primary-900': "var(--primary-900)",
        'primary-1000': "var(--primary-1000)",
        'primary-1100': "var(--primary-1100)",
        'red-light': "var(--red-light)",
        'red-dark': "var(--red-dark)",
        'green-light': "var(--green-light)",
        'green-dark': "var(--green-dark)",        
        'defaultFontSize': "var(--defaultFontSize)",
        'headingFont': "var(--headingFont)",
        'bodyFont': "var(--bodyFont)",
        'smallText': "var(--smallText)",
        'extraSmallText': "var(--extraSmallText)",
        'backgroundColor': "var(--backgroundColor)",
        'textColor': "var(--textColor)",      
        'fixed-width': "var(--fixed-width)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
