import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";
import whatsappLogo from "../assets/whatsapp.svg";
import emailLogo from "../assets/email.svg";
import callMe from "../assets/callMe.png";

export default function Contacts() {
    return (
        <section id="contact">
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
        </section>
    );
}
