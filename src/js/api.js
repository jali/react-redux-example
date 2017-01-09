const eventData = require('../data/live.json');

let api = {
  getLiveEvents() {
  	return eventData
  }
};

module.exports = api;
