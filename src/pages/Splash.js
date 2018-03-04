import React, {Component} from 'react';
import {Image, StatusBar, View} from 'react-native';
import {splash} from "../base/styles";

export default class Splash extends Component<{}> {

    static navigationOptions = {
        header: null
    };

    state = {};

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate("Home");
        },5000);
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={splash.container}>
                <StatusBar
                    backgroundColor={"rgba(255,0,0,0.5)"} />
                <Image source={require('./../assets/images/splash_bg.jpg')}
                    style={splash.bgImage}
                    resizeMode={"cover"}
                />
                <View style={splash.layer} />
                <Image
                    source={require('./../assets/images/splash_logo.png')}
                    style={splash.image}
                />
            </View>
        );
    }
}