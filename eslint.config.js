// eslint.config.js

const { createConfig } = require('eslint-config-next');

module.exports = createConfig({
  // Add your custom rules or overrides here
  extends: ['next/core-web-vitals'],
});
