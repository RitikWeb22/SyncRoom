import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			dark: {
				1: '#161622',
				2: '#191924',
				3: '#20202C',
	
			},
			blue: {
				1: '#0077FF',
				2: '#0056B3',
				3: '#003A8C',
			
			},
			sky:{
				1:"#c9ddff"
			},
			orange:{
				1:"#f55708"
			},
			purple:{
				1:"#b208f5"
			},
			green:{
				1:"#239b56"
			},
			pink:{
				1:"#7823c3",
				2:"#f55708"
			}
		},
		backgroundImage:{
			hero:" linear-gradient(to right, #6a11cb, #2575fc)"

		},
		  
  	
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
