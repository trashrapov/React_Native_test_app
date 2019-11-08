import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import AvatarScreen from '../screens/AvatarScreen';

import SideBar from '../screens/layouts/SideBar';

import { connect } from 'react-redux';
//import { actionCreators } from '../store/Actions';

const HomeStack = createStackNavigator(
  	{
    	Home: {
      		screen: WelcomeScreen,
      		navigationOptions: {
        		header: null,
      		},
    	},
    	Map: {
      		screen: MapScreen,
    	},
    	Avatar: {
      		screen: AvatarScreen,
    	},
  	},
  	{
    	initialRouteName: 'Home',
  	}
);
const MapStack = createStackNavigator(
  	{
    	Map: {
      		screen: MapScreen,
      		navigationOptions: {
        		header: null,
      		},
    	},
    	Home: {
      		screen: WelcomeScreen,
    	},
    	Avatar: {
      		screen: AvatarScreen,
    	},
  	},
  	{
    	initialRouteName: 'Map',
  	}
);
const AvatarStack = createStackNavigator(
  	{
    	Avatar: {
      		screen: AvatarScreen,
      		navigationOptions: {
        		header: null,
      		},
    	},
    	Map: {
      		screen: MapScreen,
    	},
    	Home: {
      		screen: WelcomeScreen,
    	},
  	},
  	{
    	initialRouteName: 'Avatar',
  	}
);

const MyDrawerNavigator = createDrawerNavigator(
  	{
    	Home: {
      		screen: HomeStack,
    	},
    	Map: {
      		screen: MapStack,
    	},
    	Avatar: {
      		screen: AvatarStack,
    	},
  	},
  	{
    	initialRouteName: 'Home',
    	contentComponent: SideBar,
		drawerWidth: 300
  	}
);

export default createAppContainer(MyDrawerNavigator);


