import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    View,
    Modal,
    FlatList,
    Dimensions,
    TouchableHighlight,
    Text,
    TouchableOpacity
} from 'react-native';
import { Input } from './Input'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';

const dimension = Dimensions.get('window');

class MultFilterPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            selectedNames: {}
        }
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        excludeData: PropTypes.shape({}),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        data: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.shape({})
        ]).isRequired,
        placeholder: PropTypes.string,
        onSelect: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
        inputBoxStyle: PropTypes.shape({}),
        style: PropTypes.shape({}),
        pickerItemStyle: PropTypes.shape({}),
        dropDownArrowStyle: PropTypes.shape({}),
        iconSize: PropTypes.number,
        filter: PropTypes.string,
        iconColor: PropTypes.string,
        onChangeText:  PropTypes.func,
    }

    selectUserAction(user) {
        let tmpSelectedNames = Object.assign({}, this.state.selectedNames)
        if(tmpSelectedNames[`${user.firstName} ${user.lastName}`])
            tmpSelectedNames[`${user.firstName} ${user.lastName}`] = undefined
        else
            tmpSelectedNames[`${user.firstName} ${user.lastName}`] = user.id
        this.setState({
            selectedNames: tmpSelectedNames
          })
    }

    renderComponent(item) {
        const {
            filter,
            pickerItemStyle,
            excludeData,
        } = this.props;
        let user = item[1];

        const {
            itemStyle,
            itemTextStyle
        } = styles
        if(excludeData && excludeData[user.id]) return null;

        let selected = (this.state.selectedNames[`${user.firstName} ${user.lastName}`]) ?
            { backgroundColor: '#f00' }: {};
        var re = new RegExp("^"+filter, "i");

        if (re.test(`${user.firstName} ${user.lastName}`) ){
        return(
            <TouchableOpacity
            onPress={() => this.selectUserAction(user)}>
                <View style={[itemStyle, pickerItemStyle, selected]}>
                    <Text style={itemTextStyle}>{user.firstName} {user.lastName}</Text>
                </View>
            </TouchableOpacity>
        )
        }


    }

   _keyExtractor = (item, index) => index;

    render = () => {
        const {
            inputStyle,
            inputStylee,
            inputStyleee,
            iconStyle,
            modalStyle,
            modalBackground,
            textStyle,
            buttonContainer,
            flatlistStyle,
            buttonStyle,
            titleStyle
        } = styles;

        const {
            title,
            value,
            data,
            placeholder,
            onChangeText,
            style,
            inputBoxStyle,
            dropDownArrowStyle,
            iconSize,
            iconColor
        } = this.props
        if(value !== undefined && value !== null && this.state.text !== String(value)){
            this.setState({text: String(value)})
        }
        return (
            <View>
                <Modal
                transparent={true}
                visible={this.state.modalVisible}>
                    <View style={modalBackground}>
                        <View style={modalStyle}>
                            <Text style={titleStyle}>{title}</Text>
                            <Input
                            style={[inputStylee, inputStyleee]}
                            onChangeText={onChangeText}
                            value={this.props.filter}
                            />
                            <View style={flatlistStyle}>
                                <FlatList
                                data={Object.entries(this.props.data)}
                                extraData={this.state}
                                keyExtractor={this._keyExtractor}
                                renderItem={({item, index}) => (
                                    this.renderComponent(item, index)
                                )}
                                />
                            </View>
                            <View style={buttonContainer}>
                                <TouchableOpacity  
                                style={buttonStyle}
                                onPress={() => this.props.onSelect(this.state.selectedNames)}
                                >
                                    <Text style={textStyle}>Done</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  
                                style={buttonStyle}
                                onPress={() => this.props.onClose()}>
                                    <Text style={textStyle}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    };
}


MultFilterPicker.defaultProps = {
    title: 'Give me a title!',
    placeholder: 'Choose an Option',
    iconSize: 50,
    iconColor: 'white'
}

const styles = {
    itemStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderBottomColor: '#0002',
        borderBottomWidth: 1
    },
    itemTextStyle: {
        paddingTop: dimension.height * .03,
        paddingBottom: dimension.height * .03,
        flex: 1,
        fontSize: 16,
        alignSelf:'center',

    },
    titleStyle: {
        flex: .13,
        alignSelf: 'center',
        fontSize: 20
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'center'
    },
    flatlistStyle: {
        flex: 1.5
    },
    buttonContainer:{
        flex:.3,
        flexDirection: 'row',
        borderTopColor: '#0001',
        borderTopWidth: 1
    },
    textStyle:{
        flex: 1,
        alignSelf: 'center',
        fontSize: 18,
        paddingTop: dimension.height * .03,
    },
    modalBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0003',
        margin: 0,
        height: dimension.height,
        width: dimension.width,
    },
    modalStyle: {
        height: dimension.height,
        width: dimension.width,
        backgroundColor:'#fff',
        padding: 12,
        borderRadius: 12,
    },
    inputStyle:{
        flex: 1
    },
    inputStylee:{
        flex: .1
    },
    iconStyle: {
        flex: .2,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    inputStyleee: {
        alignSelf: 'center',
        width: dimension.width,
        color: '#000',
        fontSize: 16,
        marginTop: 8,
        marginBottom: 8,
        padding: 15,
        backgroundColor: '#DCDCDC',
        borderRadius: 0,
      }
}

export { MultFilterPicker }