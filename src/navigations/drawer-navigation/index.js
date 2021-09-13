import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TabNavigator from '../tab-navigation'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='Tab' component={TabNavigator} />
    </Navigator>
  )
}

export default DrawerNavigator