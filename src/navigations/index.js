import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "../context/authContext";

import {
  CreateAccount,
  SignIn,
  Splash,
  Explorer,
  Profile,
  Home,
} from "../screens";

const StackNavigator = createStackNavigator();

const AuthStack = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <StackNavigator.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </StackNavigator.Navigator>
);

const TabNavigator = createBottomTabNavigator();

const TabStack = () => (
  <TabNavigator.Navigator screenOptions={{ headerShown: false }}>
    <TabNavigator.Screen name="TabHome" component={Home} />
  </TabNavigator.Navigator>
);

const DrawerNavigator = createDrawerNavigator();

const DrawStack = () => (
  <DrawerNavigator.Navigator initialRouteName="Home">
    <DrawerNavigator.Screen name="Home" component={TabStack} />
  </DrawerNavigator.Navigator>
);

const RootStackNavigator = createStackNavigator();

const RootStack = ({ userToken }) => (
  <RootStackNavigator.Navigator screenOptions={{ headerShown: false }}>
    {userToken ? (
      <RootStackNavigator.Screen
        name="App"
        component={DrawStack}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStackNavigator.Screen
        name="Auth"
        component={AuthStack}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStackNavigator.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
