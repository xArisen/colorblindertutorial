import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import 'react-native-gesture-handler'
import Home from '../../screens/Home/Home'

const Stack = createStackNavigator()

interface AppStackProps {
  onReady: () => void
}

const AppStack = (props: AppStackProps) => {
  const { onReady } = props

  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
