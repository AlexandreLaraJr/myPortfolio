import alexandreLara from "../assets/alexandreLara.png";

export default function About() {
    return (
        <section id="about">
            <div className="columnA">
                <h2>Sobre</h2>
                <p>
                    Me chamo Alexandre Lara, sou formado em Análise e
                    Desenvolvimento de Sistemas na Fatec Santos, desenvolvedor
                    web e apaixonado em tudo em que a arte de criar serviços Web
                    proporciona.
                </p>
            </div>
            <div className="columnB">
                <img src={alexandreLara} alt="" />
            </div>
        </section>
    );
}
