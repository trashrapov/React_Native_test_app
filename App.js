import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainReducer from './store/Reducer';
import AppIndex from './Index';


const store = createStore(MainReducer);


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }    
    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (                  
            <Container>
                <Provider store={store}>                                                            
                    <AppIndex />   
                </Provider>                          
            </Container>                    
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
