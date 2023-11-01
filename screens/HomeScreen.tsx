import React, {useCallback, useEffect, useRef} from "react";
import {
    MainContainer,
    StyledSafeView,
    StyledTextInput,
    StyledButton,
    StyledImage, StyledFlatList
} from "../components/common";
import TypoGraphy from "../components/Typography/TypoGraphy";
import {TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native";
import UseGalleryData from "../hooks/useGalleryData";
import BottomSheetGallery, {BottomSheetRefProps} from "../components/Gallery/BottomSheetGallery";
import Gallery from "../components/Gallery/Gallery";
import useAuth from "../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const HomeScreen = () => {
    const {userId, AccessToken} = useAuth();
    const getToken = async () => {
        const id = await AsyncStorage.getItem("userId");
        const token = await AsyncStorage.getItem("AccessToken");
    }
    useEffect(() => {
        getToken();
    }, []);



   const {data: galleryAssets} = UseGalleryData();

    const navigation = useNavigation();
    const onPressCreate = () => {
       navigation.navigate("ImageCreator");
    }

    const ref = useRef<BottomSheetRefProps>(null);
    const openGallery = useCallback((index: number) => {
        const isActive = ref?.current?.isActive();
        if(isActive){
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-SCREEN_HEIGHT);
        }
    }, []);


    return(
        <StyledSafeView className={"bg-[#ABD7FA] flex-1"}>
            <MainContainer>
                <TypoGraphy type={"primaryDialog"} size={"title"}>Community Gallery</TypoGraphy>
                <TypoGraphy size={"m"} type={"primaryDialog"}>Browse through a collection of images generated with our application</TypoGraphy>
                <StyledButton onPress={openGallery} title={"Gallery"}/>
                <StyledTextInput className={"border-2 border-[#DAB0E2] p-1 mt-3 mb-3"}/>
                    <StyledFlatList
                        data={galleryAssets}
                        numColumns={2}
                        alwaysBounceVertical={false}
                        alwaysBounceHorizontal={false}
                        bounces={false}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={true}
                        renderItem={({item, index}) => {
                            return(
                                    <TouchableOpacity onPress={openGallery(index)}>
                                        <StyledImage className={"mr-5 mb-5 rounded-2xl"} height={150} width={150} source={{uri: item.url}}/>
                                    </TouchableOpacity>
                            )
                        }}
                    />
                <StyledButton onPress={onPressCreate} color={"#DAB0E2"} title={"Create"}/>
            </MainContainer>
            <BottomSheetGallery ref={ref}>
                <Gallery/>
            </BottomSheetGallery>
        </StyledSafeView>
    )
}

const styles = StyleSheet.create({

})

export default HomeScreen;