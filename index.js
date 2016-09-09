'use strict';
const networkInfo = require('./network-info.json');
const connection = (typeof navigator !== 'undefined' && navigator.connection) || null;

module.exports = () => {
  if (connection) {
    return networkInfo
      .filter(network => network[connection.type])[0][connection.type]
      .filter(info => parseInt(info.downlinkMax,10) === connection.downlinkMax)[0]
  } else {
    return null;
  }
};
