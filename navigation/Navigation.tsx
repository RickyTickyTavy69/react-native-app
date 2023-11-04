import HomeScreen from "../screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ImageCreator from "../screens/ImageCreator";
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from "../screens/Profile";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import OnboardingScreen from "../screens/OnboardingScreens/OnboardingScreen";
import Registration from "../screens/Registration";
import Verification from "../screens/Verification";
import React from "react";
import {Dimensions} from "react-native";
import {StyledText} from "../components/common";
import Settings from "../screens/Settings";
import Login from "../screens/Login";

const { width: SCREEN_WIDTH} = Dimensions.get("window");
const ICON_INTERVAL = SCREEN_WIDTH / 4;
console.log("interval", ICON_INTERVAL, SCREEN_WIDTH);

const Tab = createBottomTabNavigator();

const NO_NAV_ICON_AND_HEADER = {
    headerShown: false,
    tabBarIcon : ({focused}: {focused: boolean}) => {
        return null;
    }};
const NO_TAB = { tabBarStyle: {display: "none"}} as {tabBarStyle: {display: "none"}};
const NO_HEADER = {headerShown: false};

const Navigation = () => {

    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    "tabBarStyle": [{
                        position: "absolute",
                        bottom: 25,
                        left: 20,
                        right: 20,
                        display: "flex",
                        justifyContent: "space-around",
                        backgroundColor: "white",
                        borderRadius: 15,
                        height: 90,
                        ...styles.shadow,
                    }, null]
                }}
                initialRouteName={"Onboarding"}
                /* screenOptions={
                ({route}) => ({
                    tabBarIcon : ({focused, color, size}) => {
                    let iconName: string;
                    let rn = route.name;

                    if(rn === "Home"){
                        iconName = focused ? "images" : "images-outline"
                    } else if(rn === "ImageCreator"){
                        iconName = focused ? "add-circle" : "add-circle-outline"
                    } else if(rn === "Gallery"){
                        iconName = focused ? "settings" : "settings-outline"
                    } else if(rn === "Profile"){
                        iconName = focused ? "person" : "person-outline"
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                })
            } */

            >
                <Tab.Screen options={{...NO_TAB, ...NO_NAV_ICON_AND_HEADER}} name={"Onboarding"} component={OnboardingScreen} />
                <Tab.Screen options={{...NO_NAV_ICON_AND_HEADER}} name={"registration"} component={Registration}/>
                <Tab.Screen options={{...NO_NAV_ICON_AND_HEADER}} name={"Verification"} component={Verification}/>

                <Tab.Screen options={{...NO_NAV_ICON_AND_HEADER}} name={"Login"} component={Login}/>

                <Tab.Screen options={{tabBarIcon : ({focused, color, size}) => (
                        <View style={{position: "absolute", left: -130 , top: 45 - size, display: "flex", alignItems: "center", width: 55}}>
                            <Ionicons name={"settings"} size={size + 5} color={color}/>
                            <StyledText style={{color: color}}>Settings</StyledText>
                        </View>
                    ),...NO_HEADER}} name={"Settings"} component={Settings}/>

                <Tab.Screen options={{tabBarIcon : ({focused, color, size}) => (
                        <View style={{position: "absolute", left: -100, top: 45 - size, display: "flex", alignItems: "center", width: 55}}>
                            <Ionicons name={"person"} size={size + 5} color={color}/>
                            <StyledText style={{color: color}}>Profile</StyledText>
                        </View>
                    ),...NO_HEADER}} name={"Profile"} component={Profile}/>

                <Tab.Screen options={{tabBarIcon : ({focused, color, size}) => (
                        <View style={{position: "absolute", left: -65, top: 45 - size, display: "flex", alignItems: "center", width: 55}}>
                            <Ionicons name={"images"} size={size + 5} color={color}/>
                            <StyledText style={{color: color}}>Home</StyledText>
                        </View>
                    ),...NO_HEADER}} name={"Home"} component={HomeScreen}/>

                <Tab.Screen options={{tabBarIcon : ({focused, color, size}) => (
                        <View style={{position: "absolute", left: -30, top: 45 - size, display: "flex", alignItems: "center", width: 55}}>
                            <Ionicons name={"add-circle"} size={size + 5} color={color}/>
                            <StyledText style={{color: color}}>Create</StyledText>
                        </View>
                    ),...NO_HEADER}} name={"ImageCreator"} component={ImageCreator}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default Navigation;