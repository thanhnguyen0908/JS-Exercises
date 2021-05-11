import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
class CounterApp extends Component {


    render() {
        return (
            <View style={[styles.container, {backgroundColor: '#003f5c'}]}>
                <View style={{ flexDirection: 'row', width: "80%", justifyContent: 'space-evenly' }}>
                    <TouchableOpacity style={{backgroundColor:'red', borderRadius:5, padding: 10}} onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20, color:'white' }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginTop: 10, color:'white' }}>{this.props.counter}</Text>
                    <TouchableOpacity style={{backgroundColor:'red', borderRadius:5, padding: 10}} onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20, color:'white'  }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});