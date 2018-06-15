import React from 'react'
import {connect} from "react-redux"
import {requestSampleData, sampleAction, receiveSampleData} from '../actions/sample'
import Jumbotron from '../components/Jumbotron'
import { fetchSampleData } from '../effects/sample';


export const mapStateToProps = (state) => {
	return {
		name: state.sample.name
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		onSampleBtnClick   : () => dispatch(sampleAction()),
		onGetSampleBtnClick: () => {
			fetchSampleData().then(res => {
				dispatch(receiveSampleData(res))
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron)
