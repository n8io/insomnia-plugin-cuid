const cuid = require('cuid');

module.exports.templateTags = [
  {
    displayName: 'CUID',
    name: 'cuid',
    description: 'Generate a cuid',
    args: [],
    run: async () => cuid()
  }
];
