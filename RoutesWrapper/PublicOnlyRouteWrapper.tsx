import React, {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useIsFocused} from "@react-navigation/native";
import {GetUser} from "../api/authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StyledSafeView, StyledView} from "../components/common";
import {Text} from "react-native";

const PublicOnlyRouteWrapper = ({children}: {children: React.ReactNode | null}) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const authUser = async () => {
        const token = await AsyncStorage.getItem("AccessToken") as string;
        try{
            const response = await GetUser(token);
            setIsAuth(!!response?.data?.userId);
            setIsLoading(false);
        }catch (e) {
            setIsAuth(false);
            setIsLoading(false);
            console.log("req error", e);
        }
    }

    useEffect(() => {
        if(isFocused){
            authUser();
        }
    }, [isFocused]);

    if(!isLoading){
        if(!isAuth){
            console.log("not auth");
            return children;
        } else{
            console.log("redirect to Home, auth");
            navigation.navigate("Home");
        }
    } else {
        return(
            <StyledSafeView>
                <Text>
                    LOADING...
                </Text>
            </StyledSafeView>
        )
    }

}

export default PublicOnlyRouteWrapper;