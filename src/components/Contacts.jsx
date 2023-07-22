import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";
import whatsappLogo from "../assets/whatsapp.svg";
import emailLogo from "../assets/email.svg";
import callMe from "../assets/callMe.png";
import ContactsSocialLink from "./ContactsSocialLink";

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
            <div className="columnB">
                <img
                    src={callMe}
                    alt="Caricatura de Alexandre criada através do Memoji do sistema iOs"
                />
            </div>
        </section>
    );
}
