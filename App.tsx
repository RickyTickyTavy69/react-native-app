import Navigation from "./navigation/Navigation";
import {withExpoSnack} from "nativewind"
import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreens/OnboardingScreen";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Registration from "./screens/Registration";
import Verification from "./screens/Verification";
import Login from "./screens/Login";

const {Screen, Navigator} = createNativeStackNavigator();

function App() {
    const queryClient = new QueryClient()
  return (
      <GestureHandlerRootView style={{flex: 1}}>
          <QueryClientProvider client={queryClient}>
                  <NavigationContainer>
                      <Navigator initialRouteName={"Onboarding"}>
                          <Screen options={{headerShown: false}} name={"Onboarding"} component={OnboardingScreen} />
                          <Screen options={{headerShown: false}} name={"app"} component={Navigation} />
                          <Screen options={{headerShown: false}} name={"registration"} component={Registration}/>
                          <Screen options={{headerShown: false}} name={"Verification"} component={Verification}/>
                          <Screen options={{headerShown: false}} name={"Login"} component={Login}/>
                      </Navigator>
                  </NavigationContainer>
          </QueryClientProvider>
      </GestureHandlerRootView>

  );
}

export default withExpoSnack(App);