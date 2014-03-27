
Package.describe({
  summary: "Allows you to highlight parts of text",
});

Package.on_use(function (api) {

  api.use(['deps', 'underscore', 'jquery'], 'client');
  api.use(['spacebars', 'ui', 'handlebars'], 'client', { week: true });

  api.add_files([
    'highlight.css',
    'highlight.js',
    'helpers.js',
  ], 'client');
});
