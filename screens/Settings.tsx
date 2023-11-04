import {MainContainer, StyledSafeView, StyledText, StyledView} from "../components/common";
import {DefaultButton} from "../components/Button";
import {Switch} from "react-native";
import {useState} from "react";



const Settings = () => {
    const [danger, setDanger] = useState<boolean>(false);
    const handleTheme = () => {}
    const handleToggle = () => {
        setDanger(!danger);
    }
    const handleDelete = () => {
        console.log("delete")
    }

    return(
        <StyledSafeView>
            <MainContainer>
                <StyledView className={"pt-6 pb-6"}>
                        <DefaultButton title={"Change Theme"} onPress={handleTheme}/>
                        <StyledView className={"flex flex-row gap-5 pt-6"}>
                            <Switch onChange={handleToggle} thumbColor={danger? 'black': "red"} trackColor={{false: 'black', true: "grey" }} value={danger}/>
                            <StyledText className={"text-lg font-bold"}>
                                DANGER
                            </StyledText>
                        </StyledView>
                    <DefaultButton isDisabled={!danger} title={"Delete Account"} onPress={handleDelete}/>
                </StyledView>

            </MainContainer>
        </StyledSafeView>
    )
};

export default Settings;