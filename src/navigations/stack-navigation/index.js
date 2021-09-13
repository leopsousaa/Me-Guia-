import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNavigator from '../drawer-navigation'
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'
import Home from '../../screens/Home'
import Tip from '../../screens/Tip'
import Guide from '../../screens/Guide'

const { Navigator, Group, Screen } = createStackNavigator()

const AuthNavigator = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)

  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      {isSignedIn ?
        <Screen name='Auth' component={DrawerNavigator} />
        :
        <Group>
          <Screen name='SignIn' component={SignIn} />
          <Screen name='SignUp' component={SignUp} />
        </Group>
      }
    </Navigator>
  )
}

const HomeNavigator = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='Home Navigator' component={Home} />
      <Screen name='Tip' component={Tip} />
      <Screen name='Guides' component={Guide} />
    </Navigator>
  )
}

export { AuthNavigator, HomeNavigator }