import {SafeAreaView} from "react-native";
import {StyledText, StyledImage} from "../../components/common";
import robo from "../../assets/icons/roboIcon.png";
import React from "react";

const OnBoardingThree = () => {

    return(
        <SafeAreaView className={"flex flex-col items-center"}>
            <StyledText> Enjoy this great application </StyledText>
            <StyledImage source={robo}/>
            <StyledText> Swipe left to begin </StyledText>
        </SafeAreaView>
    )
}

export default OnBoardingThree;