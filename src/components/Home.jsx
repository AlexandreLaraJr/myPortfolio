import memoji from "../assets/memoji.png";
export default function Home() {
    return (
        <section id="home">
            <div className="columnA">
                <h3>Desenvolvedor</h3>
                <h1>Alexandre Lara</h1>
                <p>
                    Desenvolvedor web, apaixonado por tecnologia, música e
                    jogos.
                </p>
            </div>
            <div className="columnB">
                <img src={memoji} alt="" />
            </div>
        </section>
    );
}
