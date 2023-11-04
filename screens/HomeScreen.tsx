import React, {useCallback, useEffect, useRef, useState} from "react";
import {
    MainContainer,
    StyledSafeView,
    StyledTextInput,
    StyledButton,
    StyledImage,
    StyledFlatList, StyledView,
} from "../components/common";
import TypoGraphy from "../components/Typography/TypoGraphy";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UseGalleryData from "../hooks/useGalleryData";
import BottomSheetGallery, {
  BottomSheetRefProps,
} from "../components/Gallery/BottomSheetGallery";
import Gallery from "../components/Gallery/Gallery";
import useAuth from "../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SmallButton} from "../components/Button/Button";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const HomeScreen = () => {

  const { userId, AccessToken } = useAuth();
  const [givenIndex, setGivenIndex] = useState<any>();
  const getToken = async () => {
    const id = await AsyncStorage.getItem("userId");
    const token = await AsyncStorage.getItem("AccessToken");
  };
  useEffect(() => {
    getToken();
  }, []);

  const { data: galleryAssets } = UseGalleryData();

  const navigation = useNavigation();
  const onPressCreate = () => {
    navigation.navigate("ImageCreator");
  };

  const ref = useRef<BottomSheetRefProps>(null);
  const openGallery = useCallback((index: number) => {
      setGivenIndex(index);
      console.log("index is", index);
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-SCREEN_HEIGHT);
    }
  }, []);

  return (
    <StyledSafeView className={"bg-[#ABD7FA] flex-1"}>
      <MainContainer>
        <TypoGraphy type={"primaryDialog"} size={"title"}>
          Community Gallery
        </TypoGraphy>
        <TypoGraphy size={"m"} type={"primaryDialog"}>
          Browse through a collection of images generated with our application
        </TypoGraphy>
          <StyledView className={"flex flex-row justify-between"}>
              <SmallButton title={"Open Gallery"} onPress={openGallery}/>
              <SmallButton title={"Create"} onPress={onPressCreate}/>
          </StyledView>
      </MainContainer>
        <StyledView className={"flex flex-col items-center"}>
            <StyledFlatList
                className={"border-2 mt-6"}
                style={{
                    height: SCREEN_HEIGHT * 0.5,
                    width: SCREEN_WIDTH * 0.9,
                }}
                data={galleryAssets}
                numColumns={2}
                alwaysBounceVertical={false}
                alwaysBounceHorizontal={false}
                bounces={false}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => openGallery(index)}>
                            <StyledImage
                                className={"mr-2 ml-2 mb-2 mt-2 rounded-2xl"}
                                height={150}
                                width={150}
                                source={{ uri: item.url }}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </StyledView>
      <BottomSheetGallery ref={ref}>
        <Gallery givenIndex={givenIndex} />
      </BottomSheetGallery>
    </StyledSafeView>
  );
};

const styles = StyleSheet.create({

})

export default HomeScreen;