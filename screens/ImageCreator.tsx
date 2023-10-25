import {
    MainContainer,
    MainTextInput, StyledButton,
    StyledSafeView,
    StyledTextInput,
    StyledView,
    StyledSpinner,
} from "../components/common";
import TypoGraphy from "../components/Typography/TypoGraphy";
import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useState} from "react";

import Checkbox from 'expo-checkbox';
import {Text, Image, ActivityIndicator, TouchableWithoutFeedback} from "react-native";
import {saveFromURL, getRandomPrompt} from "../utils";
import axios from "axios";

const ImageCreator = () => {
    // const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    // check if the user has permissions to save pics to his data.
    const navigation = useNavigation();
    const [generatingImg, setGeneratingImg] = useState<boolean>(false);
    const [surpriseMe, setSurpriseMe] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [name, setName] = useState("");
    const [outPut, setOutPut] = useState<any>(null);

    //just for now
    const [imageUrl, setImageUrl] = useState<string>("")

    const handleSubmit = async () => {
        setOutPut(null);
        setGeneratingImg(true);

        const PromptInfo = {
            name, prompt
        };
        try{
            const response = await axios.post("http://192.168.2.116:5000/open-ai", {PromptInfo}, {
                headers:{
                    "Content-Type" : "application/json",
                    Prefer: 'respond-async',
                },
            })
            setGeneratingImg(false);
            setOutPut(response.data.image);
            setImageUrl(response.data.cloudinaryUrl);
            console.log("url", response.data.cloudinaryUrl);
        }catch (e) {
            console.log("axios error", e);
        }

        setPrompt("");
        setName("");
    }

    const handleChangePrompt = (text : string) => {
        setPrompt(text);
    }
    const handleChangeName = (text: string) => {
        setName(text);
    }

    const handleSaveImage = async () => {
        await saveFromURL(imageUrl);
    }



    useEffect(() => {
        if(surpriseMe){
            const newPrompt = getRandomPrompt(prompt)
            setPrompt(newPrompt)
        } else{
            setPrompt("");
        }
    }, [surpriseMe]);

    return(
        <StyledSafeView>
            <MainContainer>
                <TypoGraphy size={"title"} type={"primaryDialog"}>Create your art</TypoGraphy>
                <TypoGraphy type={"primaryDialog"} size={"l"} >
                    create imaginative and visually stunning pictures using an AI
                </TypoGraphy>
                <StyledView>
                    <MainTextInput onChange={handleChangeName} placeholder={"Julian Assange"} />
                    <MainTextInput onChange={handleChangePrompt} value={prompt} placeholder={"purebred cats play chess with decorative pigs"}/>
                    <StyledView className={"flex flex-row gap-5 pt-5"}>
                        <StyledView>
                            <Checkbox value={surpriseMe} onValueChange={() => setSurpriseMe(!surpriseMe)}/>
                        </StyledView>
                        <StyledView>
                            <Text>Surprise me</Text>
                        </StyledView>
                    </StyledView>
                    <TouchableWithoutFeedback onLongPress={handleSaveImage}>
                        <StyledView className={"border-2 border-[#ECAE0C] h-60 w-60 mt-5 mb-10 flex justify-center"}>
                            { outPut && <Image width={250} height={250} source={{uri: `data:image/png;base64,${outPut}`}}/> }
                            {generatingImg && <ActivityIndicator size={"large"} color={"#DAB0E2"}/>}
                        </StyledView>
                    </TouchableWithoutFeedback>

                    <StyledButton onPress={handleSubmit} title={"Generate"}/>
                </StyledView>
            </MainContainer>

        </StyledSafeView>
    )
}

export default ImageCreator;