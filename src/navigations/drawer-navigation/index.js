import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { PALLET } from '../../globalStyles/palletColor'
import { RoundPixel } from '../../utils/roundPixel'

import TabNavigator from '../tab-navigation'
import Header from '../../components/Header'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='Me Guiaê'
        component={TabNavigator}
      />
    </Navigator>
  )
}

export default DrawerNavigator