import React from "react";
import "./style.css";

function round(num, decimalPlaces = 0) {
  num = Math.round(num + "e" + decimalPlaces);
  return Number(num + "e" + -decimalPlaces);
}
export default function App() {
  return (
    <div>
    
      <h1>Hello StackBlitz!</h1>
      {round(12,3)}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
