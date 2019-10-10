import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { NavBar, Button} from '../components/general'

import {
    checkInSimple
  } from "../ducks"

class SimpleCheckIn extends Component{

    render(){

        const {
            checkInSimple
        } = this.props

        return(
            <View style = {styles.GeneralContainer}>
                <TouchableOpacity 
                onPress = {checkInSimple}
                >
                    <View style = {styles.TextContainer}>
                        <Text>
                            Check In 
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    GeneralContainer:{
        flex: 1,
        justifyContent: 'center'
    },
    ButtonContainer:{
        margin: 20,   
        alignItems: 'center'
    },
    TextContainer:{
        margin: 20,   
        alignItems: 'center',
        backgroundColor: "blue",
        borderRadius: 20,
        padding: 5
    }
})

const mapStateToProps = ({}) => {
    return { };
  };

const mapDispatchToProps = {
checkInSimple
};


export default connect (mapStateToProps, mapDispatchToProps) (SimpleCheckIn);