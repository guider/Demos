/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use-strict'
import React, {
    Component
}
    from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    TextInput,
    View
}
    from 'react-native';

class Demos extends Component {
    render() {
        return ( <View style={
        styles.container
    }>
                <Image style={styles.icon} source={require('./app/image/qq_icon.png')}
                />
                <TextInput
                    style={styles.textinput}
                    placeholder='QQ\手机号\邮箱'
                    numberOfLines={1}
                    autoFocus={true}
                    textAlign='center'
                />


                <TextInput
                    style={styles.password}
                    placeholder='密码'
                    numberOfLines={1}
                    secureTextEntry={true}
                    textAlign='center'
                />
                <Text style={styles.login} >
                    登陆
                </Text>
            <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10,}}>
                <Text style={{color:'#63b8ff',marginLeft:10}}>
                    无法登录?
                </Text >
                <Text style={{flex:1,alignItems:'flex-end',textAlign:'right',color:'#63b8ff',marginRight:10}}>
                    新用户
                </Text>
                </View>
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
    login:{
        marginTop:30,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:'#63b8ff',
        fontSize:20,
        color:'white',
        textAlign:'center',
        lineHeight:30,
        height:40,
        justifyContent:'center',
        alignItems:'center',

    },
    fail:{
        alignItems:'flex-end',
        backgroundColor:'red',
        marginBottom:10,

    },

});

AppRegistry.registerComponent('Demos', () => Demos);
