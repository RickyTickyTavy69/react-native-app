import {
  MainContainer,
  StyledSafeView,
  StyledText,
  StyledView,
} from "../components/common";
import {useNavigation} from "@react-navigation/native";
import DefaultInput from "../components/Input/Input";
import { DefaultButton } from "../components/Button";
import { Formik } from "formik";
import {PostUser} from "../api/authApi";
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import * as yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RegisterUser} from "../api/api.types";

const RegisterUserSchema = yup.object({
    username: yup.string().required().min(5),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
});

const Registration = () => {
    const navigation = useNavigation();
    const RegisterUser = async (values: RegisterUser) => {
        try{
            const response = await PostUser({
                ...values
            });
            const userId = response.data.userId;
            await AsyncStorage.setItem('userId', userId);
            navigation.navigate("Verification");
        } catch(e){
            console.log("error", e);
        }
    }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StyledSafeView className={"border-2 flex-1"}>
            <MainContainer>
              <StyledView className={"flex items-center"}>
                <StyledText className={"text-2xl"}>Registration</StyledText>
                <Formik
                    validationSchema={RegisterUserSchema}
                    initialValues={{
                    username: "",
                    email: "",
                    password: "",
                }}
                    onSubmit={async (values, actions) => {
                    console.log("value", values);
                    await RegisterUser(values);
                }}>
                    {(props: any) => (
                        <StyledView>
                            <DefaultInput
                                placeholder={"Marina Dallakyan"}
                                onChangeText={props.handleChange("username")}
                                value={props.values.username}
                                onBlur={props.handleBlur("username")}
                            />
                             <StyledText className={"text-[#ED4545]"}>
                                {props.touched.username && props.errors.username}
                             </StyledText>

                            <DefaultInput
                                placeholder={"marina@dallakyan.info"}
                                onChangeText={props.handleChange("email")}
                                value={props.values.email}
                                onBlur={props.handleBlur("email")}
                            />
                            <StyledText className={"text-[#ED4545]"}>
                                {props.touched.email && props.errors.email}
                            </StyledText>

                            <DefaultInput
                                placeholder={"***********"}
                                onChangeText={props.handleChange("password")}
                                value={props.values.password}
                                onBlur={props.handleBlur("password")}
                            />
                             <StyledText className={"text-[#ED4545]"}>
                                {props.touched.password && props.errors.password}
                             </StyledText>
                            <DefaultButton title={"Sign Up"} onPress={props.handleSubmit} />
                        </StyledView>
                    )}
                </Formik>
              </StyledView>
            </MainContainer>
        </StyledSafeView>
      </TouchableWithoutFeedback>
  );
};

export default Registration;