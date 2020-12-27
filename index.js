import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducerone from './myReducers/reducerone';


export const mystore = createStore(reducerone);
console.log(mystore.getState())

const MyEntryPoint = () => (
    <Provider store={mystore}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => MyEntryPoint);
