import {StyledTextInput} from "../common";
import {Dimensions} from "react-native";
const {width: ScreenWidth} = Dimensions.get("window");

type InputProps = {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    onBlur?: (blur: any) => void;
}
export const DefaultInput = ({placeholder, onChangeText, value, onBlur} : InputProps) => {
    return(
        <StyledTextInput onBlur={onBlur} style={{paddingHorizontal: ScreenWidth * 0.1 , width: ScreenWidth * 0.8, height: 45}} className={"flex items-center justify-center mt-7 rounded-3xl border-2 drop-shadow-md"} placeholder={placeholder} onChangeText={onChangeText} value={value}/>
    )
}

export default DefaultInput;