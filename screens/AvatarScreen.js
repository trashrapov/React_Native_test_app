import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Button, Icon, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Header from './layouts/Header';

const uri = '../assets/avatat_placeholder.png';

class AvatarScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	state = {
	    hasCameraPermission: null,
	    type: Camera.Constants.Type.back,
	    cameraOn: false,
	    avatarPath: null
	};

	async askPermission() {
	    const { status } = await Permissions.askAsync(Permissions.CAMERA);
	    this.setState({ hasCameraPermission: status === 'granted' });
	}

	openCamera = () => {
		this.askPermission()
		this.setState({
			cameraOn: true
		});
	};

	snap = async () => {
	  	if (this.camera) {
	    	let photo = await this.camera.takePictureAsync();	    	
	    	this.setState({
	    		avatarPath: photo.uri
	    	});
	    	let uri = photo.uri;
	    	this.props.dispatch({type: 'Avatar_Updated', uri});
	    	
	    	this.closeCamera(photo.uri);
	  	}

	};

	flip = () => {
		this.setState({
			type:
				this.state.type === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back,
		});
	};

	closeCamera = () => {
		this.setState({
			cameraOn: false
		});
	};

	toggleSideBar = () => {
		this.props.navigation.toggleDrawer();
	};

	navigateBack = () => {
		const { state, goBack } = this.props.navigation;    
    	const params = state.params || {};
		goBack(params.go_back_key);
	};

	render() {	
			
		if (this.state.hasCameraPermission === false) {
      		return <Text>No access to camera</Text>;
    	}
    	if ( ! this.state.cameraOn ) {
			return (
				<View style={styles.main}>
					<Header
						title={'AvatarScreen'}
						style={styles.header} 
						navigateBack={this.navigateBack}
						toggleSideBar={this.toggleSideBar}            
		            />				
					<View style={styles.container}>				
						<TouchableOpacity 
							onPress={this.openCamera}>
							<Image					
					        	style={styles.avatar}
					        				        	
					        	source={ this.props.TestStore.avatar ?  {uri: this.props.TestStore.avatar} : require(uri)}				        	
					        />
					    </TouchableOpacity>		     
					</View>
				</View>
			);
		} else {
			return (
				<View style={styles.main}>	
					<View style={{ flex: 1 }}>
		          		<Camera 
		          			style={{ flex: 1 }} 
		          			type={this.state.type}
		          			ref={ref => {
							    this.camera = ref;
							}}
		          		>
		            		<View
		              			style={{
		                		flex: 1,
		                		backgroundColor: 'transparent',
		                		flexDirection: 'row',
		              		}}>	              			
		              			<View style={styles.cameraControlsContainer}>
			              			<Button
			              				style={styles.cameraControls} 
			              				bordered light
			              				onPress={this.flip}
			              			>
			              				<Icon type="FontAwesome" name="refresh" />
			              			</Button>
			              			<Button
			              				style={styles.cameraControls} 
			              				bordered light
			              				onPress={this.snap}
			              			>
			              				<Icon type="FontAwesome" name="camera" />
			              			</Button>
			              			<Button
			              				style={styles.cameraControls} 
			              				bordered light
			              				onPress={this.closeCamera}
			              			>
			              				<Icon type="FontAwesome" name="close" />
			              			</Button>
		              			</View>
		            		</View>
		          		</Camera>
		        	</View>
	        	</View>
        	);
		}
	}
}

//export default AvatarScreen;
export default connect(
	state => ({
		TestStore: state
	})	
)(AvatarScreen);

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
  	container: {
  		flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
  	avatar: {
  		width: 300,
  		height: 300,  		
  		borderRadius: 150		
  	},
  	cameraControlsContainer: {
  		flex: 1,
  		padding: 20,
  		flexDirection: 'row',
  		alignItems: 'flex-end',
  		justifyContent: 'space-between'
  	},

  	cameraControls: {
  		alignItems: 'center',
  		justifyContent: 'center',
  		width: '25%'  		
  	}

});