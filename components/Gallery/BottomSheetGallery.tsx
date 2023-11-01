import {StyledView} from "../common";
import {Dimensions, StyleSheet} from "react-native";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import React, {useCallback, useEffect, useImperativeHandle} from "react";


const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;

type BottomSheetProps = {
    children?: React.ReactNode,
}
export type BottomSheetRefProps = {
    scrollTo: (destination: number) => void;
    isActive : () => boolean;
}


const BottomSheetGallery = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
    ({children}, ref) => {
    const translateY = useSharedValue(0);
    const context = useSharedValue({y : 0});
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
        'worklet';
        active.value = destination !== 0;
        translateY.value = withSpring(destination, {damping: 50})
    }, []);

    const isActive = useCallback(() => {
        return active.value;
    }, []);

    useImperativeHandle(ref, () => (
        {scrollTo, isActive}
    ), [scrollTo, isActive]);

    const pan = Gesture.Pan()
        .onStart(() => {
            context.value = {y: translateY.value}
        })
        .onUpdate((event) => {
            translateY.value = event.translationY +context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
            // console.log(translateY.value)
        })
        .onEnd((event) => {
            if(event.velocityY > 1000){
                console.log("fast");
                if(event.translationY > 0){
                    console.log("scroll")
                    scrollTo(0);
                }
            } else {
                console.log("no fast scroll")
                if(translateY.value > -SCREEN_HEIGHT/2){
                    scrollTo(0);
                } else {
                    scrollTo(MAX_TRANSLATE_Y);
                }
            }



            // console.log("pan event", event);
        })


    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolation.CLAMP,
        );
        return {
            borderRadius,
            transform: [{translateY: translateY.value}]
        }
    })

    return(
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
                {children}
            </Animated.View>
        </GestureDetector>
    )
});

const styles = StyleSheet.create({
    bottomSheetContainer : {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: '#000',
        position: "absolute",
        top: SCREEN_HEIGHT,
        borderRadius: 25,
    },

})

export default BottomSheetGallery;