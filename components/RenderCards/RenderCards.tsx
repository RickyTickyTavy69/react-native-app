import {StyledText, StyledView} from "../common";
import Card from "./Card";

const RenderCards = ({data, title} : {data: any, title: string}) => {

    return(
        <StyledView>
            {(data.length > 0) && data.map((post : any, idx: number) => {
                return(
                    <Card post={post}></Card>
                )
            })}
            {(data.length === 0) && <StyledText>
                No Images were found with your query
            </StyledText>}
        </StyledView>
    )
}

export default RenderCards;