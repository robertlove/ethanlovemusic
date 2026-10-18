export default {
  content: ['./_site/**/*.html', './_site/assets/js/**/*.js'],
  css: ['./_site/assets/css/style.css'],
  output: './_site/assets/css/style.css',
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    standard: ['show', 'active', 'hiding', 'dialog-open'],
    greedy: [/^carousel/, /^menu/, /^drawer/, /^dialog/, /^tooltip/, /^popover/]
  }
}
