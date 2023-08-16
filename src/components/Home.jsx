import memoji from "../assets/memoji.png";
export default function Home() {
    return (
        <section id="home">
            <div className="columnA">
                <div className="wrapName">
                    <h3>Desenvolvedor</h3>
                    <h1>Alexandre</h1>
                    <h1>Lara</h1>
                </div>
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
