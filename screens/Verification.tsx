import {MainContainer, StyledSafeView, StyledText, StyledView} from "../components/common";
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import {Formik} from "formik";
import {VerifyEmail} from "../api/authApi";
import DefaultInput from "../components/Input/Input";
import {DefaultButton} from "../components/Button";
import * as yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

const RegisterUserSchema = yup.object({
    code: yup.string().required().min(6).max(6),
})

const Verification = () => {
    const navigation = useNavigation();
    const handleVerify = async (values: {code : string}) => {

        try{
            const userId = await AsyncStorage.getItem('userId') as string;
            const response = await VerifyEmail({...values, userId});
            if(response.data.AccountVerified === false){
                alert("something went wrong. Please, try again")
            } else {
                navigation.navigate("app");
            }
        }catch(e){

        }
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <StyledSafeView className={"border-2 flex-1"}>
                <MainContainer>
                    <StyledView className={"flex items-center"}>
                        <StyledText className={"text-2xl"}>Verify Your Email</StyledText>
                        <Formik
                            validationSchema={RegisterUserSchema}
                            initialValues={{
                                code: '',
                            }}
                            onSubmit={async (values, actions) => {
                                console.log("value", values);
                                try{
                                    await handleVerify(values);
                                } catch(e){
                                    console.log("error is", e);
                                }
                                // actions.resetForm();

                            }}>
                            {(props: any) => (
                                <StyledView>

                                    <DefaultInput
                                        placeholder={"enter your code"}
                                        onChangeText={props.handleChange("code")}
                                        value={props.values.code}
                                        onBlur={props.handleBlur("code")}
                                    />
                                    <StyledText className={"text-[#ED4545]"}>
                                        {props.touched.code && props.errors.code}
                                    </StyledText>

                                    <DefaultButton title={"Ándale"} onPress={props.handleSubmit} />
                                </StyledView>
                            )}
                        </Formik>
                    </StyledView>
                </MainContainer>
            </StyledSafeView>
        </TouchableWithoutFeedback>
)};

export default Verification;
