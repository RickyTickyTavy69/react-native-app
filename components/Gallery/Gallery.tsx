import { StyledImage, StyledSafeView, StyledView } from "../common";
import React, {useEffect, useRef, useState} from "react";
import {
    FlatList,
    StyleSheet,
    Dimensions, TouchableOpacity,
} from "react-native";
import useGalleryData from "../../hooks/useGalleryData";

const Gallery = ({givenIndex}: { givenIndex?: any }) => {
  const { width, height } = Dimensions.get("window");
  const {data : galleryAssets} = useGalleryData();
  const topRef = useRef();
  const thumbRef = useRef();



  const [activeIndex, setActiveIndex] = useState();
  const scrollToActive = (index: any) => {
      // this does not work perfect, especially when scrolling back (to left)
      // also if I scroll quick two times at the end, it stucks and breaks itself. I should fix it.
      setActiveIndex(index);
      // @ts-ignore
      topRef?.current?.scrollToOffset({
          offset: index * width,
          animated: true,
      });
      if(index * 90 - 40 > width / 2){
          // @ts-ignore
          thumbRef?.current?.scrollToOffset({
              offset: index * 90 - width / 2 + 40,
              animated : true,
          })
      } else{
          // @ts-ignore
          thumbRef?.current?.scrollToOffset({
              offset: 0,
            animated: true,
          })
      }
  }

    useEffect(() => {
        if(givenIndex){
            scrollToActive(givenIndex)
        }
    }, [givenIndex]);

  return (
    <StyledSafeView style={{ flex: 1, backgroundColor: "#000" }}>
      <FlatList
          ref={topRef}
          onMomentumScrollEnd={ev => {
              scrollToActive(Math.floor(ev.nativeEvent.contentOffset.x / width));
          }}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={galleryAssets}
        keyExtractor={(item) => item.asset_id}
        renderItem={({ item }) => {
          return (
            <StyledView style={{ position: "relative" }}>
                <StyledView style={styles.line}/>
                <StyledImage
                    className={"mt-20"}
                    source={{ uri: item.url }}
                    width={width}
                    height={500}
                />
            </StyledView>
          );
        }}
      />
        <FlatList
            ref={thumbRef}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={galleryAssets}
            keyExtractor={(item) => item.asset_id}
            contentContainerStyle={{paddingHorizontal: 10}}
            style={{position: 'absolute', bottom: 130}}
            renderItem={({ item, index }) => {

                return (
                    <TouchableOpacity onPress={() => scrollToActive(index)}>
                        <StyledImage
                            source={{ uri: item.url }}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 12,
                                marginRight: 10,
                                borderWidth: 2,
                                borderColor: activeIndex === index ? "#fff" : "transparent",
                            }}
                        />
                    </TouchableOpacity>
                );
            }}
        />
    </StyledSafeView>
  );
};

const styles = StyleSheet.create({
    line : {
        position: "absolute",
        top: 50,
        width: 75,
        height: 6,
        backgroundColor: "white",
        opacity: 0.4,
        alignSelf: "center",
        borderRadius: 5,
        zIndex: 20,
    }
})



export default Gallery;