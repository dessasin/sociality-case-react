import React from "react";
import "./App.scss";
import NavigationMenu from "./components/navigationMenu/Navigation";
import ClientMenu from "./components/clientMenu/ClientMenu";
import logo from './assets/logo.png'

function App() {
    return (
        // components will be come here
        <main className="app">
            <aside className="app_aside">
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <div className="app_aside_menus">
                    <ClientMenu></ClientMenu>
                    <NavigationMenu></NavigationMenu>
                </div>
            </aside>
            <div className='app_content'>aa </div>
        </main>
    );
}

export default App;
