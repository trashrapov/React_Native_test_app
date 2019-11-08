import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';

class MainHeader extends React.Component {
	render(){
		return (
			<Header style={styles.header}>
          		<Left>
	            	<Button transparent
	            		onPress={this.props.navigateBack}
	            	>
	              		{this.props.title !== 'Home' && <Icon name='arrow-back' />}
	            	</Button>
          		</Left>
          		<Body>
           			<Title>{this.props.title}</Title>
          		</Body>
          		<Right>
            		<Button 
            			transparent 
            			onPress={this.props.toggleSideBar}
            		>
              			<Icon name='menu' />
            		</Button>
          		</Right>
        	</Header>
		);
	}
}

export default MainHeader;

const styles = StyleSheet.create({
	header: {
		height: 80,
		justifyContent: 'center' 
	}
})