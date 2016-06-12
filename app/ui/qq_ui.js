'use-strict'
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
} from 'react-native';

export default class QQ_UI extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    测试测试
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    icon: {
        marginTop: 40,
        backgroundColor: 'red',
        flexWrap: 'wrap',
        alignSelf: 'center',

    },
    textinput: {
        backgroundColor: '#fff',
        marginTop: 10,
        height: 35,
    },
    password: {
        height: 35,
        backgroundColor: '#fff',
    },
    login: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: '#63b8ff',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        lineHeight: 30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    fail: {
        alignItems: 'flex-end',
        backgroundColor: 'red',
        marginBottom: 10,

    },

});
