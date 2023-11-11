import { Platform, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS, FONTS } from "../../theme";

interface Styles {
  container: ViewStyle;
  input_con: ViewStyle;
  error: TextStyle;
  input: any;
}

export const styles: Styles = StyleSheet.create<Styles>({
  container: {
    marginTop: 30,
    width: "100%",
  },
  input_con: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.white,
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: "gray",
    marginTop: 10,
  },
  error: {
    ...FONTS.roboto_regular,
    fontSize: 12,
    color: "red",
    marginVertical: 5,
  },
  input: {
    flex: 1,
    ...FONTS.roboto_light,
    textTransform:'lowercase',
    color: COLORS.gray,
    ...(Platform.OS === "web" && { outline: "none" }),
  },
});
