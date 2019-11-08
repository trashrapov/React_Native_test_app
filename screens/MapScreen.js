import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Button, Text } from 'native-base';

import Header from './layouts/Header';

class MapScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	state = {
	    location: null,
	    region: null,
	    errorMessage: null,
	    LATLNG: {
	        latitude: -35,
	        longitude: 120
	    },
	};
	
	componentWillMount() {
	    if (Platform.OS === 'android' && !Constants.isDevice) {
	      	this.setState({
	        	errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
	      	});
	    } else {
	      	this._getLocationAsync();
	    }
  	}

    _getLocationAsync = async () => {
    	let { status } = await Permissions.askAsync(Permissions.LOCATION);
    	if (status !== 'granted') {
      		this.setState({
        		errorMessage: 'Permission to access location was denied',
      		});
    	}

    	let location = await Location.getCurrentPositionAsync({});
    	this.setState({ location });    	
    	
    	this.onRegionChange(location);
  	};  	

  	onRegionChange = (location) => {
  		let coords = {
  			latitude: location.coords.latitude,
	      	longitude: location.coords.longitude,
	      	latitudeDelta: 0.0922,
	      	longitudeDelta: 0.0421,
  		};
  		this.setState({
  			region: coords
  		});

  		this.setState(prevState => ({
		  	LATLNG: {
		    	...prevState.LATLNG,          
			   latitude: coords.latitude,
			   longitude: coords.longitude
		  	}
		}));
  		
  	}

  	toggleSideBar = () => {
		this.props.navigation.toggleDrawer();
	};

	navigateBack = () => {
		this.props.navigation.goBack();
	};

	render() {
		const RADIUS = 500;
		console.log(this.props.TestStore);	
		return (
			<View style={styles.main}>
				<Header
					style={styles.header}        
					title={'MapScreen'}
					navigateBack={this.navigateBack}					              
	                toggleSideBar={this.toggleSideBar} 
	            />
				<View style={styles.container}>
			    	<MapView 
			    		provider={PROVIDER_GOOGLE}
			    		style={styles.mapStyle} 
			    		mapPadding={{top: 10, bottom: 10, left: 10, right: 10}}
			    		showsUserLocation={true}
			    		followsUserLocation={true}
			    		showsMyLocationButton={true}
			    		region={this.state.region}		    		    		
			    	>
				    	<MapView.Circle 
				    		key = { (this.state.LATLNG.latitude + this.state.LATLNG.longitude).toString() }
				    		center={this.state.LATLNG}
				    		radius={RADIUS}
				    		strokeWidth = { 1 }
			                strokeColor = { '#1a66ff' }
			                fillColor = { 'rgba(230,238,255,0.5)' }
				    	/>
			    	</MapView>
			    	<Button 
			    		style={{position: 'absolute', bottom: 40}}
			    		onPress={()=>this.props.navigation.navigate('Avatar')}
			    	>
			    		<Text>Switch To Page #3</Text>
			    	</Button>
			    </View>
		    </View>
		);
	}
}

export default MapScreen;

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	header: {
		width: '100%'
	},
  	container: {
    	flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
 	mapStyle: {
 		flex: 1,
    	width: '100%',
    	height: '100%',
  	},
});
