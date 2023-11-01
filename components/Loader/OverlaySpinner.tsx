import {StyledSafeView} from "../common";
import {ActivityIndicator} from "react-native";
import React from "react";

const OverlaySpinner = () => {

    return(
        <StyledSafeView className={"h-screen absolute top-0 bottom-0 left-0 right-0 -z-50 bg-[DAB0E21A]"}>
            <ActivityIndicator size={"large"} color={"#DAB0E2"}/>
        </StyledSafeView>
    )
}

export default OverlaySpinner;