import React, {Component} from 'react';
import {View} from 'react-native';

export default class Home extends Component<{}> {

    static navigationOptions = {
        title: "Home"
    };

    state = {};

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={{flex: 1}}>

            </View>
        );
    }
}