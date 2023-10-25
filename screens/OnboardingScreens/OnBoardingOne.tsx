import {StyledView, StyledText, StyledSafeView} from "../../components/common";
import robo from "../../assets/icons/roboIcon.png"
import Icon from "../../assets/icons/Icon";
import {withExpoSnack} from "nativewind";
import TypoGraphy from "../../components/Typography/TypoGraphy";

const OnBoardingOne = ({size} : {size : string}) => {
    return(
        <StyledSafeView>
            <StyledView className={"flex flex-col items-center"}>
                <TypoGraphy size={"title"} type={"primaryDialog"}>Welcome to AI PlayGround!!</TypoGraphy>
                <StyledText className={`text-[#F6ACC5] ${size === "title" && `text-2xl`}`}>Welcome to AI PlayGround!!</StyledText>
                <Icon source={robo}/>
                <TypoGraphy size={"l"} type={"secondaryDialog"}>Swipe left to the next screen!</TypoGraphy>
            </StyledView>
        </StyledSafeView>
    )
}

export default withExpoSnack(OnBoardingOne);