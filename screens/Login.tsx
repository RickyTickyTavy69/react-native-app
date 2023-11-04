import {MainContainer, StyledSafeView, StyledText, StyledView} from "../components/common";
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import {Formik} from "formik";
import { SignUp } from "../api/authApi";
import DefaultInput from "../components/Input/Input";
import {DefaultButton} from "../components/Button";
import * as yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import OverlaySpinner from "../components/Loader/OverlaySpinner";

const LoginUserSchema = yup.object({
    username: yup.string().required().min(5),
    password: yup.string().required().min(8),
})

const LogIn = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const handleLogin = async (values: {username: string, password: string}) => {
        console.log("login");
        setLoading(true);
        try{
            const response = await SignUp(values);
            console.log("response is", response.data);
            if(response.data.user){
                console.log("got data", response.data.user);
                console.log("id, token",response.data.user.userId, response.data.accessToken);
                await AsyncStorage.setItem("userId", response.data.user.userId);
                await AsyncStorage.setItem("AccessToken", response.data.accessToken);
                setLoading(false);
                navigation.navigate("Home");
            } else{
                console.log("login error");
                alert("login error");
            }
        }catch(e){
            setLoading(false);
            console.log("login error");
            alert("login Error");
        }
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <StyledSafeView className={"border-2 flex-1"}>
                {loading && <OverlaySpinner/>}
                <MainContainer>
                    <StyledView className={"flex items-center"}>
                        <StyledText className={"text-2xl"}>Login into your account</StyledText>
                        <Formik
                            validationSchema={LoginUserSchema}
                            initialValues={{
                                username: '',
                                password: '',
                            }}
                            onSubmit={async (values, actions) => {
                                console.log("value", values);
                                try{
                                    await handleLogin(values);
                                } catch(e){
                                    console.log("error is", e);
                                }
                                // actions.resetForm();

                            }}>
                            {(props: any) => (
                                <StyledView>
                                    <DefaultInput
                                        placeholder={"enter your username"}
                                        onChangeText={props.handleChange("username")}
                                        value={props.values.username}
                                        onBlur={props.handleBlur("username")}
                                    />
                                    <StyledText className={"text-[#ED4545]"}>
                                        {props.touched.username && props.errors.username}
                                    </StyledText>


                                    <DefaultInput
                                        placeholder={"enter your password"}
                                        onChangeText={props.handleChange("password")}
                                        value={props.values.password}
                                        onBlur={props.handleBlur("password")}
                                    />
                                    <StyledText className={"text-[#ED4545]"}>
                                        {props.touched.password && props.errors.password}
                                    </StyledText>

                                    <DefaultButton title={"Sign In"} onPress={props.handleSubmit} />
                                </StyledView>
                            )}
                        </Formik>
                    </StyledView>
                </MainContainer>
            </StyledSafeView>
        </TouchableWithoutFeedback>
    )};

export default LogIn;
