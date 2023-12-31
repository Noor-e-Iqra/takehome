import React from "react";
import { Button } from "react-native-paper";
import { FONTS } from "../../theme";

interface CustomButtonProps {
  text: String;
  onPress: () => void;
  disabled?: boolean;
  btnStyle?: object;
  loading?: boolean;
  labelStyle?: object;
  contentStyle?: object;
  mode?: "text" | "outlined" | "contained" | undefined;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  disabled,
  btnStyle,
  loading,
  labelStyle,
  contentStyle,
  mode,
}) => {
  return (
    <Button
      loading={loading}
      onPress={onPress}
      disabled={disabled}
      mode={mode || "contained"}
      style={[{ width: "100%", borderRadius: 12 }, btnStyle]}
      contentStyle={[{ height: 60 }, contentStyle]}
      labelStyle={[{ ...FONTS.exo_semibold, lineHeight: 22 }, labelStyle]}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
