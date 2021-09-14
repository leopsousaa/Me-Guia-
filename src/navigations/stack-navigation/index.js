import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../screens/Home";
import Tip from "../../screens/Tip";
import Guide from "../../screens/Guide";
import DetailsGuide from "../../screens/DetailsGuide";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home Navigator" component={Home} />
      <Screen name="Tip" component={Tip} />
      <Screen name="Guides" component={Guide} />
      <Screen name="Details Guide" component={DetailsGuide} />
    </Navigator>
  );
};

const GuideNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Guide Navigator" component={Guide} />
      <Screen name="Details Guide" component={DetailsGuide} />
    </Navigator>
  );
};

export { HomeNavigator, GuideNavigator };
