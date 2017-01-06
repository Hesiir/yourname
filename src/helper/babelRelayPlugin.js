const getBabelRelayPlugin = require('babel-relay-plugin');
const schema = require('../network/schema.json');

module.exports = { plugins: [getBabelRelayPlugin(schema.data)] };