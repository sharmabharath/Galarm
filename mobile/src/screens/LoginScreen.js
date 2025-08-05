import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {login} from '../slices/authSlice';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          dispatch(login({name: 'User'}));
          navigation.replace('Home');
        }}>
        Login
      </Button>
    </View>
  );
}
