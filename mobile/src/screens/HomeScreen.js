import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {logout} from '../slices/authSlice';

export default function HomeScreen() {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => dispatch(logout())}>
        Logout
      </Button>
    </View>
  );
}
