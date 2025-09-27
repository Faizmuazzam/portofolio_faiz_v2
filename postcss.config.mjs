const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          fontFamily: {
            body: ["var(--font-poppins)"],
            heading: ["var(--font-montserrat)"],
          },
        },
      },
    },
  },
};

export default config;
