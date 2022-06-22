const mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'public/js')
  .extract()
  .vue()
  .postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
  ])
  .alias({'@': 'resources/js'})
  .version();
