import Navigation from "./navigation/Navigation";
import {withExpoSnack} from "nativewind"
import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {AuthProvider} from "./context/AuthContext";
function App() {
    const queryClient = new QueryClient()
  return (
      <GestureHandlerRootView style={{flex: 1}}>
          <QueryClientProvider client={queryClient}>
                  <Navigation/>
          </QueryClientProvider>
      </GestureHandlerRootView>

  );
}

export default withExpoSnack(App);