import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback } from 'react'
import 'react-native-gesture-handler'
import AppStack from './routes/app-stack/app-stack'

const App = () => {
  const [areFontsLoaded, fontsError] = useFonts({
    dogbyte: require('./assets/fonts/dogbyte.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (areFontsLoaded || fontsError) {
      await SplashScreen.hideAsync()
    }
  }, [areFontsLoaded, fontsError])

  return <AppStack onReady={onLayoutRootView} />
}

export default App
