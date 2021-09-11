import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./src/navigations/tabs";

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default App;
