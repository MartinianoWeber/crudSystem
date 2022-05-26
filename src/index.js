import React from "react";
import ReactDOM from "react-dom/client";
import ContextMenu from "./components/ContextMenu";
import App from "./containers/App";
import "./main.scss"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
    <ContextMenu />
</React.StrictMode>);