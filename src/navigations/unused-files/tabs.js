import * as React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ExplorerScreen from "../screens/ExplorerScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import GuideScreen from "../screens/GuideScreen";
import TipScreen from "../screens/TipScreen";

import Header from "../../components/Header";

import { RoundPixel } from "../../utils/roundPixel";
import { PALLET } from "../../globalStyles/palletColor";

const Tab = createBottomTabNavigator();

const HomeButton = ({ children, onPress }) => (
  <>
    <TouchableOpacity
      style={{
        top: RoundPixel(-20),
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: RoundPixel(70),
          height: RoundPixel(70),
          borderRadius: RoundPixel(35),
          backgroundColor: PALLET.primaryColor,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  </>
);

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        header: () => {
          return <Header />;
        },
        tabBarStyle: {
          position: "absolute",
          bottom: RoundPixel(24),
          left: RoundPixel(20),
          right: RoundPixel(20),
          elevation: 0,
          backgroundColor: PALLET.light,
          borderRadius: RoundPixel(16),
          height: RoundPixel(90),
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Tip"
        component={TipScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: RoundPixel(10),
              }}
            >
              <Image
                source={require("../../assets/icons/icon-tip.png")}
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
      <Tab.Screen
        name="Explorer"
        component={ExplorerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: RoundPixel(10),
              }}
            >
              <Image
                source={require("../../assets/icons/icon-search.png")}
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/icon-home.png")}
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
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: RoundPixel(10),
              }}
            >
              <Image
                source={require("../../assets/icons/icon-favorite.png")}
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
      <Tab.Screen
        name="Guide"
        component={GuideScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: RoundPixel(10),
              }}
            >
              <Image
                source={require("../../assets/icons/icon-guide.png")}
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
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: RoundPixel(10),
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TabsNavigator;
