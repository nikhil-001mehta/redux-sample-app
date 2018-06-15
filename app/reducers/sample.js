import {RECEIVE_SAMPLE_DATA, receiveSampleData, REQUEST_SAMPLE_DATA, SAMPLE_ACTION} from '../actions/sample'
import {fetchSampleData} from '../effects/sample'
import {getRandomCompanyName} from '../utils/index'

export default (state = {name: null, data: []}, action) => {

	switch (action.type) {
		case SAMPLE_ACTION:
			return {
				...state,
				name: getRandomCompanyName()
			}

		case RECEIVE_SAMPLE_DATA:
			return {
				...state,
				data: action.payload.data.Search
			}

		default:
			return state
	}
}
