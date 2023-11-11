import React, { FC } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
// styles
import { styles } from "./styles";
import { globalStyles } from "../../theme/styles";
import { COLORS } from "../../theme";

interface InputProps extends TextInputProps {
  label: string;
  icon?: JSX.Element;
  form: any;
  id: string;
}

const Input: FC<InputProps> = ({ label, icon, form, id, ...rest }) => {
  const haserror = form.touched[id] && form.errors[id];

  const handleChange = (text: string) => {
    form.setFieldTouched(id, true);
    form.setFieldValue(id, text);
  };

  return (
    <View style={styles.container}>
      {/* label */}
      <Text style={globalStyles.desc}>{label}</Text>
      {/* input */}
      <View style={styles.input_con}>
        <TextInput
          id={id}
          value={form.values[id]}
          onChangeText={handleChange}
          placeholderTextColor={COLORS.gray}
          cursorColor={COLORS.primary}
          style={styles.input}
          {...rest}
        />
        {icon}
      </View>
      {/* error */}
      {haserror && <Text style={styles.error}>{form.errors[id]}</Text>}
    </View>
  );
};
export default Input;
