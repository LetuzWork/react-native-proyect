import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Text } from "react-native";

const Stack = createNativeStackNavigator();

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Header />
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            header: () => {},
          }}
        >
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
