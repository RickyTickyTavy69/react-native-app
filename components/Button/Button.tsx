import { StyledText, StyledTouchable } from "../common";
import { View } from "react-native";
import {Dimensions} from "react-native";
import React from "react";
const {width: ScreenWidth} = Dimensions.get("window");

type ButtonProps = {
    title: string;
    onPress: () => void;
    isDisabled?: boolean;
}
export const DefaultButton = ({title, onPress, isDisabled} : ButtonProps) => {

    return (
        <View>
            {isDisabled ?
                <StyledTouchable onPress={() => null} style={{width: ScreenWidth * 0.8, height: 45}} className={"flex items-center justify-center mt-7 rounded-3xl border-2 drop-shadow-md"}>
                    <StyledText className={"text-xl text-gray-400 font-bold uppercase"}>
                        {title}
                    </StyledText>
                </StyledTouchable>:

                <StyledTouchable onPress={onPress} style={{width: ScreenWidth * 0.8, height: 45}} className={"flex items-center justify-center mt-7 rounded-3xl border-2 drop-shadow-md"}>
                    <StyledText className={"text-xl text-[#6D52F8] font-bold uppercase"}>
                        {title}
                    </StyledText>
                </StyledTouchable> }
        </View>

    )
}

export const SmallButton = ({title, onPress, isDisabled} : ButtonProps) => {

    return (
        <View>
            {isDisabled ?
                <StyledTouchable onPress={() => null} style={{width: ScreenWidth * 0.4, height: 45}} className={"flex items-center justify-center mt-7 rounded-3xl border-2 drop-shadow-md"}>
                    <StyledText className={"text-sm text-gray-400 font-bold uppercase"}>
                        {title}
                    </StyledText>
                </StyledTouchable>:

                <StyledTouchable onPress={onPress} style={{width: ScreenWidth * 0.4, height: 45}} className={"flex items-center justify-center mt-7 rounded-3xl border-2 drop-shadow-md"}>
                    <StyledText className={"text-sm text-[#6D52F8] font-bold uppercase"}>
                        {title}
                    </StyledText>
                </StyledTouchable> }
        </View>

    )
}