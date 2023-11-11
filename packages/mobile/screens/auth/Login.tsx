import { Image, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../../App";
import Container from "../../components/container";
import images from "../../assets/images";
import PasswordInput from "../../components/passwordInput";
import CustomButton from "../../components/customButton";
import { SIZES, FONTS } from "../../theme";
import { useFormik } from "formik";
import * as yup from "yup";
import { globalStyles } from "../../theme/styles";
import Input from "../../components/input";
import { Errored } from "../../utils/functions";
import { useState } from "react";
import { AuthStore } from "../../store/auth";

export default function Login({
  navigation,
}: NativeStackScreenProps<StackScreens, "Login">) {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  // fields validation
  const validationSchema = yup.object({
    username: yup.string().label("Username").required(),
    password: yup.string().label("Password").required(),
  });

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // Function to handle form submission
  async function onSubmit(values: any) {
    console.log(values);
    try {
      setLoading(true);
      let body = JSON.stringify(values);
      await AuthStore.login(body, navigation, setLoading);
      
    } catch (error) {
      setLoading(false);
      Errored(error);
    }
  }
  return (
    <View style={globalStyles.container}>
      <Container paddingStyle={{ alignItems: "center" }}>
        {/* image */}
        <Image
          source={images.knowledge}
          style={{ height: SIZES.height * 0.35, width: "100%" }}
          resizeMode="contain"
        />
        {/* username input */}
        <Input
          form={form}
          id="username"
          placeholder="Your username"
          label={"Username"}
        />

        {/* password input */}
        <PasswordInput form={form} id="password" />

        {/* login btn */}
        <CustomButton
          text={"Login"}
          loading={loading}
          disabled={loading}
          onPress={form.handleSubmit}
          btnStyle={{ marginTop: "18%", width: "80%" }}
        />

        {/* don't have account */}
        <View style={[globalStyles.row, { marginTop: "8%" }]}>
          <Text style={globalStyles.regular}>Don’t have account?</Text>
          {/* Register */}
          <CustomButton
            text={"Register"}
            mode={"text"}
            contentStyle={{ height: 40 }}
            btnStyle={{ width: "auto", marginLeft: 5 }}
            labelStyle={{ ...FONTS.exo_semibold, fontSize: 18 }}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </Container>
    </View>
  );
}
