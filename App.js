import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AsyncStorage from "./utils/AsyncStorage";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import ProfileScreen from "./components/ProfileScreen";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from "./components/LoginScreen";

export default function App() {
  const [user, setUser] = useState();
  useEffect(
    () => !user && AsyncStorage.getData("user").then((user) => setUser(user)),
    []
  );
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <Header /> */}
        <Stack.Navigator
          initialRouteName={user ? "Landing" : "Login"}
          screenOptions={{
            header: (props) => <Header {...props} user={user} />,
          }}
        >
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Profile"
            component={(props) => (
              <ProfileScreen {...props} resetUser={() => setUser(null)} />
            )}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
