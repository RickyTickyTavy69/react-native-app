import React, {useEffect, useState} from "react";
import useAuth from "../hooks/useAuth";
import {useNavigation} from "@react-navigation/native";
import {useIsFocused} from "@react-navigation/native";
import {GetUser} from "../api/authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, Text} from "react-native";
import {MainContainer, StyledSafeView, StyledView} from "../components/common";
import {DefaultButton} from "../components/Button";

const PrivateRouteWrapper = ({children}: {children: React.ReactNode | null}) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const authUser = async () => {
        const token = await AsyncStorage.getItem("AccessToken") as string;
        try{
            const response = await GetUser(token);
            setIsAuth(!!response?.data?.userId);
            setIsLoading(false);
        }catch (e) {
            console.log("req wrapper error", e);
            setIsAuth(false);
            setIsLoading(false);
        }

    }

    useEffect(() => {
        authUser();
    }, [isFocused]);

    if(!isLoading){
        if(isAuth){
            return children;
        } else {
            return <StyledSafeView>
                <MainContainer>
                    <Text>You are not authorized to see this content. Create an Account in less then 1 Minute and use more features.</Text>
                    <DefaultButton title={"Sign Up"} onPress={() => navigation.navigate("registration")}/>
                    <DefaultButton title={"Log In"} onPress={() => navigation.navigate("Login")}/>
                </MainContainer>
            </StyledSafeView>
        }
    } else {
        return(
            <StyledView>
                <Text>
                    LOADING...
                </Text>
            </StyledView>
        )
    }

}

export default PrivateRouteWrapper;