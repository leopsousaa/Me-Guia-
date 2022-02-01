import React from "react";
import AppLoading from "expo-app-loading";

import { fontsLoaded } from "./font";

import DrawerNavigator from "./src/navigations/drawer-navigation";

import { NavigationContainer } from "@react-navigation/native";

const App: React.FC = () => {
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
