import {StyledButton, StyledText, StyledTouchable} from "../common";
import {TouchableOpacity} from "react-native";
import {Dimensions} from "react-native";
const {width: ScreenWidth} = Dimensions.get("window");

type ButtonProps = {
    title: string;
    onPress: () => void;
}
export const DefaultButton = ({title, onPress} : ButtonProps) => {

    return(
        <StyledTouchable onPress={onPress} style={{width: ScreenWidth * 0.8, height: 45}} className={"flex items-center justify-center mt-7 rounded-3xl border-2 drop-shadow-md"}>
            <StyledText className={"text-xl text-[#6D52F8] uppercase"}>
                {title}
            </StyledText>
        </StyledTouchable>
    )
}