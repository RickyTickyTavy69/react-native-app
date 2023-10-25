import HomeScreen from "../screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreens/OnboardingScreen";
import ImageCreator from "../screens/ImageCreator";
import Gallery from "../components/Gallery/Gallery";
const {Screen, Navigator} = createNativeStackNavigator();

const Navigation = () => {

    return(
        <NavigationContainer>
            <Navigator initialRouteName={"Onboarding"}>
                <Screen options={{headerShown: false}} name={"Onboarding"} component={OnboardingScreen}/>
                <Screen options={{headerShown: false}} name={"Home"} component={HomeScreen}/>
                <Screen options={{headerShown: false}} name={"ImageCreator"} component={ImageCreator}/>
                <Screen options={{headerShown: false}} name={"Gallery"} component={Gallery}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation;