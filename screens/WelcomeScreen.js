import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Form, Item, Input,  Label, Spinner, Text, Thumbnail } from 'native-base';
import Header from './layouts/Header';

const uri = '../assets/logo.png';

class WelcomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor() {
		super();
		this.state = {
			isLoading: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ isLoading: true });
		setTimeout( () => {
			this.setState({
				isLoading: false
			});
			this.props.navigation.navigate('Map');
		}, 3000);
	}

	toggleSideBar = () => {
		this.props.navigation.toggleDrawer();
	};

	render() {	
		//console.log(this.props.TestStore);
		return (
			<View style={styles.main}>
				<Header
					title={'Home'}
					style={styles.header}                    
                    toggleSideBar={this.toggleSideBar} 
	            />
				<KeyboardAvoidingView behavior="padding" style={styles.container}>				
	               	<View style={styles.imageContainer}>
		               	{
		               		this.state.isLoading ?  <Spinner color={'blue'} /> : <Thumbnail large source={require (uri)} />
		               	}	               	
	               	</View>
	               	<View style={styles.formContainer}>
		               	<Form 
		               		bordered={true} 
		               		style={styles.form}
		               	>
			            	<Item inlineLabel>
			            		<Label>Username</Label>
			              		<Input
			              			disabled={this.state.isLoading}
			              		/>
			           		</Item>
			            	<Item inlineLabel last>
			            		<Label>Password</Label>
			              		<Input
			              			secureTextEntry={true}
			              			disabled={this.state.isLoading}
			              		/>
			            	</Item>
			          	</Form>
		          	</View>
		          	<View style={styles.buttonContainer}>
		          		<Button 
		          			block
		          			iconRight
		          			onPress={this.handleClick}
		          		>
			            	<Text>{this.state.isLoading ? 'Loading...' : 'Submit'}</Text>		            	
			          	</Button>
		          	</View>
	            </KeyboardAvoidingView>  
            </View>                     
		);
	}
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},

	container: {
		flex: 1,
		marginBottom: 80,
		justifyContent: 'center',
		alignItems: 'center'
	},

	header: {
		flex: 1,
		width: '100%'
	},

	imageContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		width: '85%'
	},

	formContainer: {
		flex: 1,
		justifyContent: 'center',		
		width: '85%',
		marginBottom: 15
	},
	buttonContainer: {
		flex: 1,
		width: '80%',
	}
});