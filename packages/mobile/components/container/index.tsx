import React, { ReactNode } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import { globalStyles } from "../../theme/styles";

type ContainerProps = {
  children?: ReactNode;
  paddingStyle?: object;
};

const Container: React.FC<ContainerProps> = ({ children, paddingStyle }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled={Platform.OS === "ios"}
    >
      <SafeAreaView style={globalStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[globalStyles.padding, paddingStyle]}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Container;
