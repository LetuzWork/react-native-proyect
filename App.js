import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Text } from "react-native";

const Stack = createNativeStackNavigator();

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import ProfileScreen from "./components/ProfileScreen";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from "./components/LoginScreen";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <Header /> */}
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            header: Header,
          }}
        >
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
