import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ExplorerScreen from "../screens/ExplorerScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import GuideScreen from "../screens/GuideScreen";
import TipScreen from "../screens/TipScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tip" component={TipScreen} />
      <Tab.Screen name="Explorer" component={ExplorerScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Guide" component={GuideScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
