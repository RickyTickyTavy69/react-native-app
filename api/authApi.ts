import axios from "axios";
import {LogInUser, RegisterUser, VerifyMailData} from "./api.types";

export const PostUser = async (userData : RegisterUser) => {
    const response = await axios.post("http://192.168.2.116:5000/auth", userData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export const VerifyEmail = async (verifyData: VerifyMailData) => {
    const response = await axios.post("http://192.168.2.116:5000/auth/verify", verifyData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export const SignUp = async (logInData: LogInUser) => {
        const response = await axios.post("http://192.168.2.116:5000/auth/login", logInData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
}

export const GetUser = async (AccessToken: string) => {
    const response = await axios.get("http://192.168.2.116:5000/auth/getUser", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${AccessToken}`,
        },
    });
    return response;
}