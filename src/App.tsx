import React from "react";
import "./App.scss";
import Router from './components/Router/Router'
import Layout from './components/layout/Layout'
import logo from './assets/logo.png'
import routes from "./routes";

function App() {
    return (
        // components will be come here
        <Layout routes={<Router/>}/>

    );
}

export default App;
