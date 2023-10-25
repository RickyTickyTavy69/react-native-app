import {StyledText} from "../common";
import {withExpoSnack, styled} from "nativewind";

type TypoGraphyProps = {
    size: "header" | "title" | "l" | "m" | "s",
    type : "warning" | "success" | "error" | "primaryDialog" | "secondaryDialog",
    children : string,
}
const TypoGraphy = ({size, type, children} : TypoGraphyProps) => {
    return(
        <StyledText className={`
            ${size === "title" ? `text-2xl`: ''}
            ${size === "l" ? `text-lg`: ''}
            ${size === "header" ? `text-4xl`: ''}
            ${size === "m" ? `text-base`: ''}
            ${size === "s" ? `text-sm` : ''}
            ${type === "warning" ? `text-[#ED4545]`: ''}
            ${type === "success" ? `text-[#09CE64]`: ''}
            ${type === "error" ? `text-[#ECAE0C]`: ''}
            ${type === "primaryDialog" ? `text-[#271C1FFF]`: ''}
            ${type === "secondaryDialog" ? `text-[#F6ACC5]`: ''}
            pt-5 pb-5
        `}>
            {children}
        </StyledText>
    )
}

// @ts-ignore
export default TypoGraphy;