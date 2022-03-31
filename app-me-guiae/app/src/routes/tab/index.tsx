import * as React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { RootStackParamList } from '../../types/routes/RootParmList'

import { HomeNavigator, GuideNavigator } from '../stack'
import ExplorerScreen from '../../screens/Explorer'
import FavoriteScreen from '../../screens/Favorite'
import TipScreen from '../../screens/Tip'

import { RoundPixel } from '../../utils/roundPixel'
import { PALLET } from '../../styles/palletColor'

import styles from './styles'

interface PropsType {
  children: React.ReactChild
  onPress: () => any
}

const HomeButton = ({ children, onPress }: PropsType) => (
  <TouchableOpacity style={styles.ContainerCustomButtonMenu} onPress={onPress}>
    <View style={styles.CustomButtonMenu}>{children}</View>
  </TouchableOpacity>
)

const RootStackNavigator = createBottomTabNavigator()

const Navigation = () => {
  return (
    <RootStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.barStyle
      }}
    >
      <RootStackNavigator.Screen
        name="Tip"
        component={TipScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.ContainerBarIcon}>
              <Image
                source={require('../../../assets/icons/icon-tip.png')}
                resizeMode="contain"
                style={{
                  width: RoundPixel(24),
                  height: RoundPixel(24),
                  tintColor: focused ? PALLET.primaryColor : PALLET.secondColor
                }}
              />
              <Text
                style={{
                  color: focused ? PALLET.primaryColor : PALLET.secondColor,
                  fontSize: 10
                }}
              >
                Dicas
              </Text>
            </View>
          )
        }}
      />
      <RootStackNavigator.Screen
        name="Explorer"
        component={ExplorerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.ContainerBarIcon}>
              <Image
                source={require('../../../assets/icons/icon-search.png')}
                resizeMode="contain"
                style={{
                  width: RoundPixel(24),
                  height: RoundPixel(24),
                  tintColor: focused ? PALLET.primaryColor : PALLET.secondColor
                }}
              />
              <Text
                style={{
                  color: focused ? PALLET.primaryColor : PALLET.secondColor,
                  fontSize: 10
                }}
              >
                Procurar
              </Text>
            </View>
          )
        }}
      />
      <RootStackNavigator.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../../assets/icons/icon-home.png')}
              resizeMode="contain"
              style={{
                width: RoundPixel(30),
                height: RoundPixel(30),
                tintColor: focused ? PALLET.light : PALLET.secondColor
              }}
            />
          ),
          tabBarButton: props => <HomeButton {...props} />
        }}
      />
      <RootStackNavigator.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.ContainerBarIcon}>
              <Image
                source={require('../../../assets/icons/icon-favorite.png')}
                resizeMode="contain"
                style={{
                  width: RoundPixel(24),
                  height: RoundPixel(24),
                  tintColor: focused ? PALLET.primaryColor : PALLET.secondColor
                }}
              />
              <Text
                style={{
                  color: focused ? PALLET.primaryColor : PALLET.secondColor,
                  fontSize: 10
                }}
              >
                Favoritos
              </Text>
            </View>
          )
        }}
      />
      <RootStackNavigator.Screen
        name="Guide"
        component={GuideNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.ContainerBarIcon}>
              <Image
                source={require('../../../assets/icons/icon-guide.png')}
                resizeMode="contain"
                style={{
                  width: RoundPixel(24),
                  height: RoundPixel(24),
                  tintColor: focused ? PALLET.primaryColor : PALLET.secondColor
                }}
              />
              <Text
                style={{
                  color: focused ? PALLET.primaryColor : PALLET.secondColor,
                  fontSize: 10
                }}
              >
                Guias
              </Text>
            </View>
          )
        }}
      />
    </RootStackNavigator.Navigator>
  )
}

export default Navigation
