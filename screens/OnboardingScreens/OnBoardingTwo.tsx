import React from "react";
import {StyledImage, StyledText, StyledSafeView} from "../../components/common";
import robo from "../../assets/icons/roboIcon.png";

const OnBoardingTwo = () => {

    return(
        <StyledSafeView className={"flex flex-col items-center"}>
            <StyledText> Here Your can generate Images with AI and more </StyledText>
            <StyledImage source={robo}/>
            <StyledText>Swipe left to the next screen</StyledText>
        </StyledSafeView>
    )
}

export default OnBoardingTwo;