import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import { HomeScreen } from "../screens/home";
// import { ExplorerScreen } from "../screens/explorer";
// import { FavoriteScreen } from "../screens/favoritie";
// import { GuideScreen } from "../screens/guides";
// import { tipScreen } from "../screens/tips";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return {
    /* <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ExplorerScreen" component={ExplorerScreen} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Stack.Screen name="GuideScreen" component={GuideScreen} />
        <Stack.Screen name="tipScreen" component={tipScreen} />
      </Stack.Navigator> */
  };
};

export { StackNavigator };
