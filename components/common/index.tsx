import {View, Text, SafeAreaView, Image, TextInput, Button, Switch, ScrollView, ActivityIndicator} from "react-native";
import {styled} from "nativewind";

// here are all the components used in the app, styled with nativewind to make it possible to use tailwindcss in
// this react-native app.
export const StyledView = styled(View);
export const StyledText = styled(Text);
export const StyledSafeView = styled(SafeAreaView);
export const StyledImage = styled(Image);
export const StyledTextInput = styled(TextInput);
export const StyledButton = styled(Button);
export const StyledSwitch = styled(Switch);

export const StyledScrollView = styled(ScrollView);
export const StyledSpinner = styled(ActivityIndicator);

export const MainContainer = ({children} : {children: any}) => {
    return (
        <StyledView className={"pl-7 pr-7 pt-7 pb-7"}>
            {children}
        </StyledView>
    )
}

type MainInputProps = {
    readonly placeholder: string;
    readonly value?: string;
    readonly onChange : (text: string) => void;
}

export const MainTextInput = ({placeholder, value, onChange} : MainInputProps) => {
    return(
        <StyledTextInput onChangeText={onChange} value={value} placeholder={placeholder} className={"border-2 border-[#DAB0E2] p-1 mt-3 mb-3"}/>
    )
}