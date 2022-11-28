'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  url: '"http://localhost:8080/"',
  api: '"http://localhost:3000/"',
  ONEAUTH: {
    url: '"https://account.codingblocks.com/"',
    clientId: '"7319994330"'
  },
  firebase: {
    apiKey: '"AIzaSyD1bGr7kMHEWxK0X-oIKWfsZ29QNhjJA5U"',
    databaseURL: '"https://cb-ide.firebaseio.com/"',
    projectId: '"cb-ide"'
  }
})
