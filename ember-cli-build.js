'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    autoImport: {
      allowAppImports: ['util/*', 'components/*'],
    },
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  });

  return app.toTree();
};
