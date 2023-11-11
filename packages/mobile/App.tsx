import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./screens/home/Home";
import WebView from "./screens/webview/WebView";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { IconButton } from "react-native-paper";
import { COLORS } from "./theme";
import { AuthStore } from "./store/auth";
import { Observer } from "mobx-react";

export type StackScreens = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  App: undefined;
};

export const Stack = createNativeStackNavigator<StackScreens>();

export default function App() {
  // loading custom fonts
  const [fontsLoaded, fontError] = useFonts({
    "Exo-Regular": require("./assets/fonts/Exo-Regular.ttf"),
    "Exo-Medium": require("./assets/fonts/Exo-Medium.ttf"),
    "Exo-SemiBold": require("./assets/fonts/Exo-SemiBold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="App"
            component={WebView}
            options={({ navigation }) => ({
              headerRight: () => (
                <Observer>
                  {() =>
                    AuthStore.token ? (
                      <IconButton
                        icon={"logout"}
                        iconColor={COLORS.primary}
                        style={{ marginRight: 0 }}
                        onPress={() => AuthStore.logout(navigation)}
                      />
                    ) : (
                      <></>
                    )
                  }
                </Observer>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
