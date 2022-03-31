import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  options,
  GuideStackParamList,
  HomeTabParamList
} from '../../types/routes/RootParmList'

import Home from '../../screens/Home'
import Tip from '../../screens/Tip'
import Guide from '../../screens/Guide'
import DetailsGuide from '../../screens/DetailsGuide'
import DetailsRoute from '../../screens/DetailsRoute'

const RootStack = createStackNavigator<HomeTabParamList>()
const GuideStack = createStackNavigator<GuideStackParamList>()

const HomeNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={options}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Tip" component={Tip} />
      <RootStack.Screen name="Guide" component={Guide} />
      <RootStack.Screen name="DetailsGuide" component={DetailsGuide} />
      <RootStack.Screen name="DetailsRoute" component={DetailsRoute} />
    </RootStack.Navigator>
  )
}

const GuideNavigator = () => {
  return (
    <GuideStack.Navigator screenOptions={options}>
      <GuideStack.Screen name="GuideNavigator" component={Guide} />
      <GuideStack.Screen name="DetailsGuide" component={DetailsGuide} />
    </GuideStack.Navigator>
  )
}

export { HomeNavigator, GuideNavigator }
