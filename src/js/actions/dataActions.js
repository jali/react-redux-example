const api = require('../api');

export function fetchData() {
	return {
		type: "FETCH_EVENTS_FULFILLED", 
		payload: api.getLiveEvents()
	}
}
