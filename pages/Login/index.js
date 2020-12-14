import React from 'react';
import { Button, ThemeProvider, Input } from 'react-native-elements';
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { LogoInalum } from '../../assets/icon';

const Login = ({navigation}) => {

  const [user, setUser] = React.useState();
  const [pass, setPass] = React.useState();

  const loginCheck = () => {
    if(user === 'user' && pass === 'password'){
      navigation.replace("Home")
    } else {
      alert("Login Failed !");
    }
  }

  return(
    <ThemeProvider>

    <SafeAreaView style={styles.container}>
      <Image source={LogoInalum} style={styles.logo} />
      <Input
        placeholder='ID'
        onChangeText={text => setUser(text)}
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='green'
          />
        }
      />

    <Input
        placeholder='Password'
        onChangeText={text => setPass(text)}
        secureTextEntry={true}
        leftIcon={
          <Icon
            name='lock'
            size={24}
            color='green'
          />
        }
      />

      <Button 
        title="Login" 
        onPress={() => loginCheck()}
        buttonStyle={styles.loginButton}
        containerStyle={styles.loginButtonContainer}
      />
    </SafeAreaView>

      
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },

  logo: {
    width: '100%',
    alignSelf: 'stretch',
    resizeMode: "center",
  },

  loginButton: {
    width : '100%',
    justifyContent: 'center',
    backgroundColor: 'green'
  },

  loginButtonContainer: {
    width : '70%',
    alignSelf: 'center'
  }

})

export default Login;


