import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../../App";
import { WebView as NativeWebView } from "react-native-webview";
import { Observer } from "mobx-react";
import { AuthStore } from "../../store/auth";
import { globalStyles } from "../../theme/styles";

export default function WebView({}: NativeStackScreenProps<
  StackScreens,
  "App"
>) {
  return (
    <View style={globalStyles.container}>
      {/* Using MobX Observer to observe changes in the session token */}
      <Observer>
        {() => (
          <NativeWebView
            sharedCookiesEnabled={true}
            source={{
              uri: "http://localhost:3000",
              headers: {
                // Setting the 'SESSION_TOKEN' cookie in the request headers
                Cookie: `SESSION_TOKEN=${AuthStore.token}`,
              },
            }}
          />
        )}
      </Observer>
      <StatusBar style="auto" />
    </View>
  );
}
