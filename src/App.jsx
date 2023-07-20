import memoji from "./assets/memoji.png";
import blob from "./assets/blob.svg";
import alexandreLara from "./assets/alexandreLara.png";
import logo from "./assets/logo.png";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import whatsappLogo from "./assets/whatsapp.svg";
import emailLogo from "./assets/email.svg";
import callMe from "./assets/callMe.png";

import { BurgerSpin as Burger } from "react-burger-icons";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
    // const [isClosed, setIsClosed] = useState(false);

    // const toggleClosed = () => {
    //     setIsClosed(!isClosed);
    //     // const burgerOpen = isClosed ? "true" : "false"
    // };
    // const stringIsClosed = isClosed.toString();

    return (
        <>
            {/* <header className="header">
                <a href={"#home"}>
                    <img className="logo" src={logo} alt="" />
                </a>
                <button
                    className="burgerMenu"
                    type="button"
                    onClick={toggleClosed}
                >
                    <Burger isClosed={isClosed} />
                </button>
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
            </header> */}
            <Header />
            <img className="blob" src={blob} alt="" />
            <div className="pageContent">
                {/* <section id="home">
                    <div className="columnA">
                        <h3>Desenvolvedor</h3>
                        <h1>Alexandre Lara</h1>
                        <p>
                            Desenvolvedor web, apaixonado por tecnologia, música
                            e jogos.
                        </p>
                    </div>
                    <div className="columnB">
                        <img src={memoji} alt="" />
                    </div>
                </section> */}
                <Home />
                {/* <section id="about">
                    <div className="columnA">
                        <h2>Sobre</h2>
                        <p>
                            Me chamo Alexandre Lara, sou formado em Analise e
                            Desenvolvimento de Sistemas na Fatec Santos,
                            desenvolvedor web e apaixonado em tudo em que a arte
                            de criar serviços Web proporciona.
                        </p>
                    </div>
                    <div className="columnB">
                        <img src={alexandreLara} alt="" />
                    </div>
                </section> */}
                <About />
                {/* <section id="contact">
                    <div className="columnA">
                        <h2>Contato</h2>
                        <div className="contacts">
                            <div className="socialLink">
                                <img
                                    id="emailLogo"
                                    className="imageContact"
                                    src={emailLogo}
                                    alt="Imagem simbolizando email"
                                />
                                <p id="email" title="Copiar E-mail.">
                                    E-mail: ale_larajr@hotmail.com
                                </p>
                            </div>
                            <div className="socialLink">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/alexandre-de-lara-castro-junior/"
                                >
                                    <img
                                        href="https://www.instagram.com/alexandrelara/"
                                        className="imageContact"
                                        src={linkedinLogo}
                                        alt="Logo do Linkedin"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/alexandre-de-lara-castro-junior/"
                                >
                                    <p>Linkedin</p>
                                </a>
                            </div>
                            <div className="socialLink">
                                <a
                                    target="_blank"
                                    href="https://github.com/AlexandreLaraJr"
                                >
                                    <img
                                        className="imageContact"
                                        src={githubLogo}
                                        alt="Logo do GitHub"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/AlexandreLaraJr"
                                >
                                    <p>GitHub</p>
                                </a>
                            </div>
                            <div className="socialLink">
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=13991697858"
                                >
                                    <img
                                        className="imageContact"
                                        src={whatsappLogo}
                                        alt="Logo do WhatsApp"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=13991697858"
                                >
                                    <p>WhatsApp</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="columnB">
                        <img
                            src={callMe}
                            alt="Caricatura de Alexandre criada através do Memoji do sistema iOs"
                        />
                    </div>
                </section> */}
                <Contacts />
            </div>
        </>
    );
}

export default App;
