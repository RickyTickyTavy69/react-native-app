import {StyledView, StyledImage} from "../../components/common";
import {ImageSourcePropType} from "react-native"

const Icon = ({source} : {source : ImageSourcePropType}) => {

    return(
            <StyledImage className={"w-20 h-20 rounded-full"} source={source}/>
    )
}

export default Icon;