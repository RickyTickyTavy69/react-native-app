import HomeScreen from "../screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ImageCreator from "../screens/ImageCreator";
import Gallery from "../components/Gallery/Gallery";
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from "../screens/Profile";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

const Tab = createBottomTabNavigator();

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
                        backgroundColor: "white",
                        borderRadius: 15,
                        height: 90,
                        ...styles.shadow,
                    }, null]
                }}
                initialRouteName={"Home"}
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
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon : ({focused}) => (
                        <View></View>
                    )}} name={"Profile"} component={Profile}/>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon : ({focused}) => (
                        <View></View>
                    )
                }} name={"Home"} component={HomeScreen}/>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon : ({focused}) => (
                        <View></View>
                    )
                }} name={"ImageCreator"} component={ImageCreator}/>
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