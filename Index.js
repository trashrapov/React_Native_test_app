import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppContainer from './navigation/Navigation';

class AppIndex extends React.Component {
	render() {
		return (
			<AppContainer />
		);
	}
}

export default connect(
	state => ({
		TestStore: state
	})
)(AppIndex);