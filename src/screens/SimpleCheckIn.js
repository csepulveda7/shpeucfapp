import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {Button} from '../components/general'

import {
    checkInSimple
  } from "../ducks"

class SimpleCheckIn extends Component{


}

const styles = StyleSheet.create({
    
})

const mapStateToProps = ({}) => {
    return {};
  };

const mapDispatchToProps = {
checkInSimple
};


export default connect (mapStateToProps, mapDispatchToProps) (SimpleCheckIn);