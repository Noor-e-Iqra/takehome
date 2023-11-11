import { Image, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../../App";
import { globalStyles } from "../../theme/styles";
import CustomButton from "../../components/customButton";
import PasswordInput from "../../components/passwordInput";
import Input from "../../components/input";
import Container from "../../components/container";
import images from "../../assets/images";
import { SIZES, FONTS } from "../../theme";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { AuthStore } from "../../store/auth";
import { Errored } from "../../utils/functions";
import { Snackbar } from "react-native-paper";

export default function Register({
  navigation,
}: NativeStackScreenProps<StackScreens, "Register">) {
  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const initialValues = {
    displayName: "",
    username: "",
    password: "",
  };

  // fields validation
  const validationSchema = yup.object({
    displayName: yup.string().label("Display Name").required(),
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
      await AuthStore.register(body, setLoading, setShowMsg);
    } catch (error) {
      setLoading(false);
      Errored(error);
    }
  }

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      {/* image */}
      <Image
        source={images.webinar}
        style={{ height: SIZES.height * 0.35, width: "100%" }}
        resizeMode="contain"
      />
      
      {/* display name input */}
      <Input
        form={form}
        id={"displayName"}
        placeholder="Your display aame"
        label={"Display Name"}
      />

      {/* username input */}
      <Input
        form={form}
        id={"username"}
        placeholder="Your username"
        label={"Username"}
      />

      {/* password input */}
      <PasswordInput form={form} id="password" />

      {/* Register btn */}
      <CustomButton
        text={"Register"}
        loading={loading}
        disabled={loading}
        onPress={form.handleSubmit}
        btnStyle={{ marginTop: "18%", width: "80%" }}
      />
      {/* have account */}
      <View style={[globalStyles.row, { marginTop: "8%" }]}>
        <Text style={globalStyles.regular}>You have account?</Text>
        {/* sign in */}
        <CustomButton
          text={"Login"}
          mode={"text"}
          contentStyle={{ height: 40 }}
          btnStyle={{ width: "auto", marginLeft: 5 }}
          labelStyle={{ ...FONTS.exo_semibold, fontSize: 18 }}
          onPress={() => navigation.navigate("Login")}
        />
      </View>

      {/* Message displayed when user is registered successfully */}
      <Snackbar
        visible={showMsg}
        duration={1000}
        style={{ margin: 0 }}
        onDismiss={() => {
          setShowMsg(false);
          navigation.replace("Login");
        }}
      >
        Registered Successfully!
      </Snackbar>
    </Container>
  );
}
