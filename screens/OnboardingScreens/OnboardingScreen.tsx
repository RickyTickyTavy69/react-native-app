import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import OnBoardingOne from "./OnBoardingOne";
import OnBoardingTwo from "./OnBoardingTwo";
import OnBoardingThree from "./OnBoardingThree";
import robo from "../../assets/icons/roboIcon.png";
import { useNavigation } from "@react-navigation/native";
import PublicOnlyRouteWrapper from "../../RoutesWrapper/PublicOnlyRouteWrapper";

const { width, height } = Dimensions.get("window");
// this gets you the width and height of the window.
// you can give an object width and height multiplied by some number, for example height * 0.5 (half of the window);

const OnboardingScreen = () => {

    const navigation = useNavigation();
    const handleDone = () => {
        navigation.navigate("app");
    };
    // not sure if those containerStyles are working
  return (
      <PublicOnlyRouteWrapper>
        <View style={styles.container}>
          <Onboarding
             showNext={false}
             showSkip={false}
             showDone={false}
            onDone={handleDone}
            onSkip={handleDone}
            containerStyles={{ paddingHorizontal: 15 }}
            pages={[
              {
                backgroundColor: "#ABD7FA",
                image: <OnBoardingOne />,
                title: "PlayGroundAi",
                subtitle: "Welcome to AI playground",
              },
              {
                backgroundColor: "#FFD8AF",
                image: <OnBoardingTwo />,
                title: "PlayGroundAi",
                subtitle: "Here you can generate your art and do more other things",
              },
              {
                backgroundColor: "#fff",
                image: <OnBoardingThree />,
                title: "",
                subtitle: "",
              },
            ]}
          />
        </View>
      </PublicOnlyRouteWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OnboardingScreen;
