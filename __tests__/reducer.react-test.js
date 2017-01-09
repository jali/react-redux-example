jest.dontMock('../src/js/reducer')

import reducer from "../src/js/reducer"

describe('Reducer', () => {
	it('has a default state', () => {
		expect(reducer(undefined, { type: 'unexpected'})).toEqual({
			eventData: [],
			fetching: false,
			fetched: false,
			error: null

		})
	})
})
