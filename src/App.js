import React from "react";
import ImageToggle from "./ImageToggle";
import "./styles.css";
import { GlobalProvider } from "./GlobalState"

export default function App() {
  return (
    <GlobalProvider className="App">
      <ImageToggle />
    </GlobalProvider>
  );
}
