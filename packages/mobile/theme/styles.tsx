import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { COLORS, FONTS, SIZES } from ".";

interface Styles {
  container: ViewStyle;
  row: ViewStyle;
  regular: any;
  desc: any;
  heading: any;
  padding: ViewStyle;
}

export const globalStyles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  regular: {
    ...FONTS.exo_regular,
    fontSize: 18,
    color: COLORS.gray,
  },
  desc: {
    ...FONTS.exo_medium,
    fontSize: 18,
    color: COLORS.gray2,
  },
  heading: {
    ...FONTS.exo_semibold,
    fontSize: 20,
    color: COLORS.gray,
    flex: 1,
  },
  padding: {
    flex: 1,
    padding: SIZES.padding,
  },
});
