import React, {useEffect} from "react";
import useAuth from "../hooks/useAuth";
import {useNavigation} from "@react-navigation/native";

const PrivateRouteWrapper = ({children}: {children: React.ReactNode | null}) => {
    const navigation = useNavigation();
    const {userId, AccessToken} = useAuth();

    if(userId && AccessToken){
        return children;
    } else{
        navigation.navigate("Login")
        return null;
    }

}