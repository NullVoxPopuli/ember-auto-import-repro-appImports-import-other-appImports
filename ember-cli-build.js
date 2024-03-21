'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    autoImport: {
      allowAppImports: ['util/*', 'components/*'],
    },
  });

  return app.toTree();
};
