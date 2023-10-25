import {TouchableHighlight, TouchableOpacity} from "react-native";
import {StyledSafeView, StyledView} from "../common";
import {Dimensions} from "react-native";
import TypoGraphy from "../Typography/TypoGraphy";
import Picture from "../../assets/icons/svg/picture.svg";
import Music from "../../assets/icons/svg/music.svg";
import User from "../../assets/icons/svg/user.svg";
import Chat from "../../assets/icons/svg/chat.svg"

const { width, height } = Dimensions.get("window");

const Footer = () => {
    return(
        <StyledView className={`h-32 w-screen bg-[#FFD8AF] absolute bottom-0 flex flex-col justify-center`}>
            <StyledView className={"flex flex-row content-between justify-around"}>
                <StyledView>
                    <TouchableOpacity>
                        <Picture height={"60"} width={"70"}/>
                    </TouchableOpacity>
                </StyledView>
                <StyledView>
                    <TouchableOpacity>
                        <Music height={"60"} width={"70"}/>
                    </TouchableOpacity>
                </StyledView>
                <StyledView>
                    <TouchableOpacity>
                        <User height={"60"} width={"70"}/>
                    </TouchableOpacity>
                </StyledView>
                <StyledView>
                    <TouchableOpacity>
                        <Chat height={"60"} width={"70"}/>
                    </TouchableOpacity>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}

export default Footer;