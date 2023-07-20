import logo from "../assets/logo.png";

import { BurgerSpin as Burger } from "react-burger-icons";
import { useState } from "react";

export default function Header() {
    const [isClosed, setIsClosed] = useState(false);

    const toggleClosed = () => {
        setIsClosed(!isClosed);
        // const burgerOpen = isClosed ? "true" : "false"
    };
    const stringIsClosed = isClosed.toString();

    return (
        <header className="header">
            <a href={"#home"}>
                <img className="logo" src={logo} alt="" />
            </a>
            <button className="burgerMenu" type="button" onClick={toggleClosed}>
                <Burger isClosed={isClosed} />
            </button>
            {/* <nav className={stringIsClosed}> */}
            <ul id="navbar" className={stringIsClosed}>
                <a href={"#home"}>
                    <li onClick={toggleClosed}>Início</li>
                </a>
                <a href={"#about"}>
                    <li onClick={toggleClosed}>Sobre</li>
                </a>
                <a href={"#projects"}>
                    <li onClick={toggleClosed}>Projetos</li>
                </a>
                <a href={"#contact"}>
                    <li onClick={toggleClosed}>Contato</li>
                </a>
            </ul>
            {/* </nav> */}
        </header>
    );
}
