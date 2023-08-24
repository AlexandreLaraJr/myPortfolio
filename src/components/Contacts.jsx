import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";
import whatsappLogo from "../assets/whatsapp.svg";
import emailLogo from "../assets/email.svg";
import callMe from "../assets/callMe.png";
import copyEmail from "../assets/copyEmail.svg";
import ContactsSocialLink from "./ContactsSocialLink";
import { useState, useRef } from "react";

export default function Contacts() {
    const [emailCopied, setEmailCopied] = useState(false);
    const emailRef = useRef(null);

    const handleEmailCopy = () => {
        const email = "ale_larajr@hotmail.com";
        // const email = emailRef.current.textContent;
        navigator.clipboard.writeText(email);
        // emailRef.current.classList.add("copied");

        setTimeout(() => {
            setEmailCopied((current) => !current);

            // emailRef.current.classList.remove("copied");
        }, 2000);
        setEmailCopied((current) => !current);
    };

    return (
        <section id="contact">
            <div className="columnA">
                <h2>Contato</h2>
                <div className="contacts">
                    <div className="socialLink" onClick={handleEmailCopy}>
                        <img
                            id="emailLogo"
                            className="imageContact"
                            src={emailLogo}
                            alt="Imagem simbolizando email"
                        />
                        <p id="email" title="Copiar E-mail.">
                            E-mail: ale_larajr@hotmail.com
                        </p>
                        <img
                            className="copyEmail"
                            src={copyEmail}
                            alt="copiar email"
                        />
                    </div>

                    <ContactsSocialLink
                        socialNetworkName={"LinkedIn"}
                        socialURL={
                            "https://www.linkedin.com/in/alexandre-de-lara-castro-junior/"
                        }
                        imgSource={linkedinLogo}
                        imageAlt={"Logotipo do Linkedin"}
                    />

                    <ContactsSocialLink
                        socialNetworkName={"GitHub"}
                        socialURL={"https://github.com/AlexandreLaraJr"}
                        imgSource={githubLogo}
                        imageAlt={"Logotipo do Github"}
                    />

                    <ContactsSocialLink
                        socialNetworkName={"WhatsApp"}
                        socialURL={
                            "https://api.whatsapp.com/send?phone=13991697858"
                        }
                        imgSource={whatsappLogo}
                        imageAlt={"Logotipo do Whatsapp"}
                    />
                </div>
            </div>
            <p className={emailCopied ? "copied" : "notCopied"}>
                Email copiado!
            </p>

            <div className="columnB">
                <img
                    src={callMe}
                    alt="Caricatura de Alexandre criada através do Memoji do sistema iOs"
                />
            </div>
        </section>
    );
}
