import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'

// import AppLoading from 'expo-app-loading'

// import { fontsLoaded } from './font'

import { NavigationContainer } from '@react-navigation/native'

const App: React.FC = () => {
  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }

  return (
    <NavigationContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>teste</Text>
      </View>
    </NavigationContainer>
  )
}

export default App
