/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import 'react-native-gesture-handler'
import Home from './screens/Home'

const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const App = () => {
  return MyStack()
}

export default App
