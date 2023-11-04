import {SafeAreaView, View} from "react-native";
import {
    StyledText,
    StyledImage,
    StyledSafeView,
    MainContainer,
    OnboardingContainer,
    StyledView
} from "../../components/common";
import {useNavigation} from "@react-navigation/native";
import {DefaultButton} from "../../components/Button";
import robo from "../../assets/icons/roboIcon.png";
import React from "react";

const OnBoardingThree = () => {
    const navigation = useNavigation();

    const handleStart = () => {
        navigation.navigate("Home");
    }
    const handleSignUp = () => {
        console.log("signup");
        navigation.navigate("registration");
    }
    const handleLogin = () => {
        console.log("Login");
        navigation.navigate("Login");
    }

    return(
        <StyledSafeView>
            <OnboardingContainer>
                <StyledText className={"text-black text-2xl"}>AI ART CREATOR</StyledText>
                <StyledImage className={"rounded-full w-40 h-40"} source={robo}/>
                <StyledText className={"text-black text-lg"}> Create an Account or try this app as a guest. If you sign Up,
                you will be able to save your images inside the account, see your prompt history and you get access to other features
                </StyledText>
                <DefaultButton onPress={handleSignUp} title={"sign Up"}/>
                <DefaultButton onPress={handleStart} title={"Try now"}/>
                <DefaultButton onPress={handleLogin} title={"log in"}/>
            </OnboardingContainer>
        </StyledSafeView>
    )
}

export default OnBoardingThree;