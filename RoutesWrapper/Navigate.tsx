import {useNavigation} from "@react-navigation/native";
import {NavPath} from "./navigation.types";
import {useEffect} from "react";
type NavigationProps = {
    to: NavPath;
}

const Navigate = ({to} : NavigationProps) => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.navigate(to);
    }, []);
    return null;
}

export default Navigate;