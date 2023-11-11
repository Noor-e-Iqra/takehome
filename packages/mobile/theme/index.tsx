import { Dimensions} from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // primary color purple
  primary: "#5667FD",

  // other colors
  secondary: "#F4F5F9",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#364356",
  gray2: "#636D77",
  light_gray: "#EDEDED",
  light_gray2: "#E6E6E6",
  light_pink: "#E8DBDB",
  yellow: "#FED430",
};

export const SIZES = {
  // global sizes
  padding: 24,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  exo_regular: {
    fontFamily: "Exo-Regular",
    fontSize: 16,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  exo_medium: {
    fontFamily: "Exo-Medium",
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  exo_semibold: {
    fontFamily: "Exo-SemiBold",
    fontSize: 20,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  roboto_light: {
    fontFamily: "Roboto-Light",
    fontSize: 14,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  roboto_regular: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  roboto_medium: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
};

export { width, height };

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
