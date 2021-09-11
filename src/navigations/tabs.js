import * as React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ExplorerScreen from "../screens/ExplorerScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import GuideScreen from "../screens/GuideScreen";
import TipScreen from "../screens/TipScreen";

const Tab = createBottomTabNavigator();

const HomeButton = ({ children, onPress }) => (
  <>
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#94AF76",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  </>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#FFF",
          borderRadius: 15,
          height: 90,
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
                top: 10,
              }}
            >
              <Image
                source={require("../../assets/icons/icon-tip.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#94AF76" : "#505050",
                }}
              />
              <Text
                style={{ color: focused ? "#94AF76" : "#505050", fontSize: 10 }}
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
                top: 10,
              }}
            >
              <Image
                source={require("../../assets/icons/icon-search.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#94AF76" : "#505050",
                }}
              />
              <Text
                style={{ color: focused ? "#94AF76" : "#505050", fontSize: 10 }}
              >
                Explorer
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
                width: 30,
                height: 30,
                tintColor: focused ? "#fff" : "#505050",
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
                top: 10,
              }}
            >
              <Image
                source={require("../../assets/icons/icon-favorite.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#94AF76" : "#505050",
                }}
              />
              <Text
                style={{ color: focused ? "#94AF76" : "#505050", fontSize: 10 }}
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
                top: 10,
              }}
            >
              <Image
                source={require("../../assets/icons/icon-guide.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#94AF76" : "#505050",
                }}
              />
              <Text
                style={{ color: focused ? "#94AF76" : "#505050", fontSize: 10 }}
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
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
