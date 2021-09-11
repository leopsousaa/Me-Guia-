import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import RegisterGuideScreen from "../screens/RegisterGuide";

const Drawer = createDrawerNavigator();

const DrawNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="RegisterGuide" component={RegisterGuideScreen} />
    </Drawer.Navigator>
  );
};

export default DrawNavigator;
