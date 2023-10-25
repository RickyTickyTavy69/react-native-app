import React, {useEffect, useState} from "react";
import Footer from "../components/Footer/Footer";
import {MainContainer, StyledSafeView, StyledScrollView, StyledTextInput, StyledText, StyledView, StyledButton} from "../components/common";
import TypoGraphy from "../components/Typography/TypoGraphy";
import {ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";




const HomeScreen = () => {

    const [galleryAssets, setGalleryAssets] = useState<any>();

    const navigation = useNavigation();
    const onPressCreate = () => {
       navigation.navigate("ImageCreator");
    }

    useEffect(() => {
        const getAssets = async () => {
            try{
                const response = await axios.get("http://192.168.2.116:5000/assets", {
                    headers: {
                        "Content-Type" : "application/json",
                    }
                });
                setGalleryAssets(response.data.resources);
                console.log("assets", response.data.resources);
            }catch (e) {

            }

        }
        getAssets();
    }, []);

    const goToGallery = ()  => {
        navigation.navigate("Gallery");
    }

    return(
        <StyledSafeView className={"bg-[#ABD7FA] h-screen"}>
            <MainContainer>
                <TypoGraphy type={"primaryDialog"} size={"title"}>Community Gallery</TypoGraphy>
                <TypoGraphy size={"m"} type={"primaryDialog"}>Browse through a collection of images generated with our application</TypoGraphy>
                <StyledButton onPress={goToGallery} title={"Gallery"}/>
                <StyledTextInput className={"border-2 border-[#DAB0E2] p-1 mt-3 mb-3"}/>
                <StyledScrollView className={"grid grid-cols-3"}>

                </StyledScrollView>
                <StyledButton onPress={onPressCreate} color={"#DAB0E2"} title={"Create"}/>
            </MainContainer>
            <Footer/>
        </StyledSafeView>
    )
}

export default HomeScreen;