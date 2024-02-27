import React from 'react';
import ReactDOM from 'react-dom'
import "./index.css";

let currdate = new Date();
currdate = currdate.getHours();

const greeting = " ";

ReactDOM.render(
<>
<h1> Hi Sir {greeting} </h1>
</>,document.getElementByID("root"));