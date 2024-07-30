import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.tsx", "./src/components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          1: "hsl(var(--bg-1))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          1: "hsl(var(--primary-1))",
          2: "hsl(var(--primary-2))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          1: "hsl(var(--secondary-1))",
          2: "hsl(var(--secondary-2))",
          3: "hsl(var(--secondary-3))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // State colors
        success: {
          50: "hsl(var(--success-50))",
          100: "hsl(var(--success-100))",
          200: "hsl(var(--success-200))",
          300: "hsl(var(--success-300))",
          400: "hsl(var(--success-400))",
          500: "hsl(var(--success-500))",
          600: "hsl(var(--success-600))",
          700: "hsl(var(--success-700))",
          800: "hsl(var(--success-800))",
          900: "hsl(var(--success-900))",
        },
        warning: {
          50: "hsl(var(--warning-50))",
          100: "hsl(var(--warning-100))",
          200: "hsl(var(--warning-200))",
          300: "hsl(var(--warning-300))",
          400: "hsl(var(--warning-400))",
          500: "hsl(var(--warning-500))",
          600: "hsl(var(--warning-600))",
          700: "hsl(var(--warning-700))",
          800: "hsl(var(--warning-800))",
          900: "hsl(var(--warning-900))",
        },
        error: {
          50: "hsl(var(--error-50))",
          100: "hsl(var(--error-100))",
          200: "hsl(var(--error-200))",
          300: "hsl(var(--error-300))",
          400: "hsl(var(--error-400))",
          500: "hsl(var(--error-500))",
          600: "hsl(var(--error-600))",
          700: "hsl(var(--error-700))",
          800: "hsl(var(--error-800))",
          900: "hsl(var(--error-900))",
        },

        text: {
          1: "hsl(var(--text-1))",
          2: "hsl(var(--text-2))",
          foreground: "hsl(var(--text-foreground))",
          "button-card": "hsl(var(--button-card))",
        },
        button: {
          DEFAULT: "hsl(var(--button))",
          1: "hsl(var(--button-1))",
          2: "hsl(var(--button-2))",
          "hover-1": "hsl(var(--hover-button-1))",
          "hover-2": "hsl(var(--hover-button-2))",
        },
        logo: "hsl(var(--logo-color))",
        // Additional colors
        neutral: {
          0: "hsl(var(--neutral-0))",
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
        },
        blue: {
          100: "hsl(var(--blue-100))",
          200: "hsl(var(--blue-200))",
          300: "hsl(var(--blue-300))",
          400: "hsl(var(--blue-400))",
          500: "hsl(var(--blue-500))",
          600: "hsl(var(--blue-600))",
          700: "hsl(var(--blue-700))",
        },
        purple: {
          100: "hsl(var(--purple-100))",
          200: "hsl(var(--purple-200))",
          300: "hsl(var(--purple-300))",
          400: "hsl(var(--purple-400))",
          500: "hsl(var(--purple-500))",
          600: "hsl(var(--purple-600))",
        },
        magenta: {
          100: "hsl(var(--magenta-100))",
          200: "hsl(var(--magenta-200))",
          300: "hsl(var(--magenta-300))",
          400: "hsl(var(--magenta-400))",
          500: "hsl(var(--magenta-500))",
          600: "hsl(var(--magenta-600))",
        },
        green: {
          100: "hsl(var(--green-100))",
          200: "hsl(var(--green-200))",
          300: "hsl(var(--green-300))",
          400: "hsl(var(--green-400))",
          500: "hsl(var(--green-500))",
          600: "hsl(var(--green-600))",
        },
        red: {
          100: "hsl(var(--red-100))",
          200: "hsl(var(--red-200))",
          300: "hsl(var(--red-300))",
          400: "hsl(var(--red-400))",
          500: "hsl(var(--red-500))",
          600: "hsl(var(--red-600))",
        },
        yellow: {
          100: "hsl(var(--yellow-100))",
          200: "hsl(var(--yellow-200))",
          300: "hsl(var(--yellow-300))",
          400: "hsl(var(--yellow-400))",
          500: "hsl(var(--yellow-500))",
          600: "hsl(var(--yellow-600))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
