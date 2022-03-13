import 'react-native-gesture-handler'
import React from 'react'
import { useFonts } from 'expo-font'

import AppLoading from 'expo-app-loading'

import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './src/navigations/drawer'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default App
