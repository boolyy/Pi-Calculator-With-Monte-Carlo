import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { CircleAndSquare } from "./components/circle-and-square/circleAndSquare";

function App() {
  return (
    <div className="App">
      An Exploration of the Monte Carlo Method
      <div className="CircleAndSquare">
        <CircleAndSquare />
      </div>
    </div>
  );
}

export default App;
