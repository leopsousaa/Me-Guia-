import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../../screens/Home";
import { HomeNavigator, GuideNavigator } from "../stack-navigation";
import ExplorerScreen from "../../screens/Explorer";
import FavoriteScreen from "../../screens/Favorite";
import GuideScreen from "../../screens/Guide";
import TipScreen from "../../screens/Tip";

// import Header from "../../components/Header";

import { RoundPixel } from "../../utils/roundPixel";
import { PALLET } from "../../globalStyles/palletColor";

import styles from "./styles";

const HomeButton = ({ children, onPress }) => (
  <>
    <TouchableOpacity
      style={styles.ContainerCustomButtonMenu}
      onPress={onPress}
    >
      <View style={styles.CustomButtonMenu}>{children}</View>
    </TouchableOpacity>
  </>
);

const TabNavigator = createBottomTabNavigator();

const Navigation = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.barStyle,
      }}
    >
      <TabNavigator.Screen
        name="Tip"
        component={TipScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.ContainerBarIcon}>
              <Image
                source={require("../../../assets/icons/icon-tip.png")}
                resizeMode="contain"
                style={{
                  width: RoundPixel(24),
                  height: RoundPixel(24),
                  tintColor: focused ? PALLET.primaryColor : PALLET.secondColor,
                }}
              />
              <Text
                style={{
                  color: focused ? PALLET.primaryColor : PALLET.secondColor,
                  fontSize: 10,
                }}
              >
                Dicas
              </Text>
            </View>
          ),
        }}
      />
      <TabNavigator.Screen
        name="Explorer"
        component={ExplorerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.ContainerBarIcon}>
              <Image
                source={require("../../../assets/icons/icon-search.png")}
                resizeMode="contain"
                style={{
                  width: RoundPixel(24),
                  height: RoundPixel(24),
                  tintColor: focused ? PALLET.primaryColor : PALLET.secondColor,
                }}
              />
              <Text
                style={{
                  color: focused ? PALLET.primaryColor : PALLET.secondColor,
                  fontSize: 10,
                }}
              >
                Procurar
              </Text>
            </View>
          ),
        }}
      />
      <TabNavigator.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/icons/icon-home.png")}
              resizeMode="contain"
              style={{
                width: RoundPixel(30),
                height: RoundPixel(30),
                tintColor: focused ? PALLET.light : PALLET.secondColor,
              }}
            />
          ),
          tabBarButton: (props) => <HomeButton {...props} />,
        }}
      />
      <TabNavigator.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.ContainerBarIcon}>
              <Image
                source={require("../../../assets/icons/icon-favorite.png")}
                resizeMode="contain"
                style={{
                  width: RoundPixel(24),
                  height: RoundPixel(24),
                  tintColor: focused ? PALLET.primaryColor : PALLET.secondColor,
                }}
              />
              <Text
                style={{
                  color: focused ? PALLET.primaryColor : PALLET.secondColor,
                  fontSize: 10,
                }}
              >
                Favoritos
              </Text>
            </View>
          ),
        }}
      />
      <TabNavigator.Screen
        name="Guide"
        component={GuideNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.ContainerBarIcon}>
              <Image
                source={require("../../../assets/icons/icon-guide.png")}
                resizeMode="contain"
                style={{
                  width: RoundPixel(24),
                  height: RoundPixel(24),
                  tintColor: focused ? PALLET.primaryColor : PALLET.secondColor,
                }}
              />
              <Text
                style={{
                  color: focused ? PALLET.primaryColor : PALLET.secondColor,
                  fontSize: 10,
                }}
              >
                Guias
              </Text>
            </View>
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default Navigation;
