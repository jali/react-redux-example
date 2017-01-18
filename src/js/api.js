const eventData = require('../data/live.json');

const api = {
  getLiveEvents() {
  	return eventData
  }
};

module.exports = api;
