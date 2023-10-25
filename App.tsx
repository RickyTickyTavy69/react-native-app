import Navigation from "./navigation/Navigation";
import {withExpoSnack} from "nativewind"
import Footer from "./components/Footer/Footer";
import React from "react";
import Gallery from "./components/Gallery/Gallery";


function App() {
  return (
      <>
        <Navigation/>
      </>

  );
}

export default withExpoSnack(App);