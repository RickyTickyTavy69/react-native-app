import {MainContainer, StyledImage, StyledSafeView, StyledText, StyledView} from "../components/common";
import React, {useEffect, useState} from "react";
import PrivateRouteWrapper from "../RoutesWrapper/PrivateRouteWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {GetUser} from "../api/authApi";
import {User} from "../core/types";
import robo from "../assets/icons/roboIcon.png";
import {DefaultButton} from "../components/Button";

const Profile = () => {

    const [user, setUser] = useState<User>();
    const authUser = async () => {
        const token = await AsyncStorage.getItem("AccessToken") as string;
        try{
            const response = await GetUser(token);
            setUser(response.data);
        } catch(e){
            console.log("req profile error", e);
        }
    }
    useEffect(() => {
        console.log("auth user");
        authUser();
    }, []);

    const handleButton = () => {
        console.log("handle")
    }


  return (
      <PrivateRouteWrapper>
    <StyledSafeView>
        <MainContainer>
            <StyledView className={"flex flex-col items-center pt-6"}>
                <StyledImage className={"rounded-full w-40 h-40"} source={robo}/>

                <StyledText className={"text-xl font-bold pt-6"}> {user?.username} </StyledText>

                <StyledView className={"flex flex-row gap-10 pt-6"}>
                    <StyledText>Email: {user?.email}</StyledText>
                </StyledView>

                <StyledView className={"flex flex-row gap-10 pt-6"}>
                    <StyledText>Email Verified: {user?.AccountVerified? "✅": "❌"}</StyledText>
                </StyledView>

                <StyledView className={"flex flex-row gap-10 pt-6"}>
                    <StyledText>Registered since: {user?.registrationDate}</StyledText>
                </StyledView>

                <DefaultButton title={"My Pictures"} onPress={handleButton}/>
                <DefaultButton title={"Logout"} onPress={handleButton}/>
            </StyledView>
        </MainContainer>
    </StyledSafeView>
      </PrivateRouteWrapper>
  );
};

export default Profile;