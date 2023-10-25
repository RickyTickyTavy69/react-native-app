import { StyledImage, StyledSafeView, StyledText, StyledView } from "../common";
import {useEffect, useRef, useState} from "react";
import axios from "axios/index";
import {
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";

const Gallery = () => {
  const { width, height } = Dimensions.get("window");

  const [galleryAssets, setGalleryAssets] = useState<any>();

  useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await axios.get("http://192.168.2.116:5000/assets", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setGalleryAssets(response.data.resources);
        // console.log("assets", response.data.resources);
      } catch (e) {}
    };
    getAssets();
  }, []);

  const topRef = useRef();
  const thumbRef = useRef();

  return (
    <StyledSafeView style={{ flex: 1, backgroundColor: "#000" }}>
      <FlatList
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={galleryAssets}
        keyExtractor={(item) => item.asset_id}
        renderItem={({ item }) => {
          console.log("uri", item.url);
          return (
            <StyledView style={{ width, height }}>
              <StyledImage
                source={{ uri: item.url }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </StyledView>
          );
        }}
      />
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={galleryAssets}
            keyExtractor={(item) => item.asset_id}
            contentContainerStyle={{paddingHorizontal: 10}}
            style={{position: 'absolute', bottom: 80}}
            renderItem={({ item }) => {
                console.log("uri", item.url);
                return (
                        <StyledImage
                            source={{ uri: item.url }}
                            style={{width: 80, height: 80, borderRadius: 12, marginRight: 10}}
                        />
                );
            }}
        />
    </StyledSafeView>
  );
};

export default Gallery;