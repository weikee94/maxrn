import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

import { addPlace } from '../../store/actions/index';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from 
'../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {

    state = {
        placeName: ''
    }

    constructor(props) {
        // super execute parents constructor
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = event => {
        console.log(event);
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                })
            }
        }
    }

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        })
    }

    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName);
        }
    }

    render () {
        return (
            <ScrollView>
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Share a place with us</HeadingText>
                </MainText>
                <PickImage />
                <PickLocation />
                <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangedHandler}/>
                <View style={styles.button}>
                    <Button title="Share the Place!" onPress={this.placeAddedHandler}/>
                </View>
                {/* <PlaceInput onPlaceAdded={this.placeAddedHandler} /> */}
            </View>
            </ScrollView>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: "80%",
        height: 150
    }, 
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);