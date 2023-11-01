import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

type useAuthReturnType = {
    userId: string | null;
    AccessToken: string | null;
}
const UseAuth = (): useAuthReturnType => {
    const [userId, setUserId] = useState<string | null>(null);
    const [accessToken, setAcessToken] = useState<string | null>(null);

    const getToken = async () => {
        const id = await AsyncStorage.getItem("userId");
        const token = await AsyncStorage.getItem("AccessToken");
        console.log("get token hook", id, token);

        setUserId(id);
        setAcessToken(token);
    }
    useEffect(() => {
        getToken();
    }, []);


        return {
            userId: userId || null,
            AccessToken: accessToken || null,
        }
}

export default UseAuth;