import React from "react";
import "./App.css";
import { Navigation } from "./Routers/Navigation";
import { FullScreen } from "./Routers/styleNavigation";

function App() {
  return (
    <FullScreen>
      <Navigation />
    </FullScreen>
  );
}

export default App;
