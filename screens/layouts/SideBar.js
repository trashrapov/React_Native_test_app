import React from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import {NavigationActions} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { Button, Icon, Text } from 'native-base';
import { connect } from 'react-redux';

const uri = '../../assets/avatat_placeholder.png';

class SideBar extends React.Component {
	navigateToScreen = (route) => () => {
    	const navigateAction = NavigationActions.navigate({
      		routeName: route
    	});
    	this.props.navigation.dispatch(navigateAction);
  	}

	render() {			
		return (
			<ScrollView>
				<SafeAreaView style={styles.container}>
					<View style={styles.imageContainer}>
						<Image					
				        	style={styles.image}				        	
				        	source={ this.props.TestStore.avatar ?  {uri: this.props.TestStore.avatar} : require(uri)}			        	
				        />
					</View>
					<View style={styles.navContainer}>
						<Button
							style={styles.button}
							transparent
							block 
							onPress={this.navigateToScreen('Home')}>
							<Icon type="FontAwesome" name="home" />
							<Text>Home Screen</Text>
						</Button>
						<Button
							style={styles.button}
							transparent
							block 
							onPress={this.navigateToScreen('Map')}>
							<Icon type="FontAwesome" name="map" />
							<Text>Map Screen</Text>
						</Button>
						<Button
							style={styles.button}
							transparent
							block 
							onPress={this.navigateToScreen('Avatar')}>
							<Icon type="FontAwesome" name="camera" />
							<Text>Avatar Screen</Text>
						</Button>				
					</View>					
				</SafeAreaView> 
			</ScrollView>
		);
	}
}

export default connect(
	state => ({
		TestStore: state
	}),
	dispatch => ({})
)(SideBar);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 15,
		padding: 20
	},
	imageContainer: {
		
	},
	image: {
		width: 260,
		height: 260,
		borderRadius: 130
	},
	navContainer: {
		flex: 1,
		marginTop: 30,
		backgroundColor: '#fff',
		justifyContent: '',
		alignItems: 'center'
	},
	button: {
		justifyContent: 'flex-start',
		marginVertical: 5
	}
});

