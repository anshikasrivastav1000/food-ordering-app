import React from "react";
import reactDom from "react-dom/client"
import App from "./App";

const reactroot = reactDom.createRoot(document.getElementById('root'));
reactroot.render(<App/>)