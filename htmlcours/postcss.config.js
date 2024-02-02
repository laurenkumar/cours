// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

module.exports = {
  plugins: 
  {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {},
      '@fullhuman/postcss-purgecss': {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}'
        ],
        // Include any other file extensions your project uses
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      },
    } : {}),
  },
};
