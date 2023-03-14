import React from "react";
import "./style.css";
const data={
  id:1,
  name:'nithish',
  account:12
}
function round(num, decimalPlaces = 0) {
  console.log(num,'num')
  num = Math.round(num + "e" + decimalPlaces);
  console.log(num,'num')
  return Number(num + "e" + -decimalPlaces);
}
export default function App() {
  return (
    <div>
    
      <h1>Hello StackBlitz!</h1>
      {Math.round(data.account)}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
