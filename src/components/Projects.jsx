import ImageSlider from "./ImageSlider";
import ProjectSlider from "./ProjectSlider";

export default function Projects() {
    const slides = [
        {
            url: "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            title: "arvore",
            description: "batata",
        },
        {
            url: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            title: "banco",
            description: "batata",
        },
        {
            url: "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            title: "montanha",
            description: "batata",
        },
    ];

    const containerStyles = {
        aspectRatio: "3/4",
        width: "30rem",
        margin: "0 auto",
    };
    return (
        <section id="projects">
            <div className="columnA">
                <h2>Projetos</h2>
                <p>Projetos de clientes e projetos próprios</p>
            </div>
            <div className="columnB">
                <div style={containerStyles}>
                    <ImageSlider slides={slides} />
                    {/* {slides.map((slide) => (
                        <ProjectSlider
                            key={slides.index}
                            cardImage={slide.url}
                            projectName={slide.title}
                            projectDescription={slide.description}
                        />
                    ))} */}
                </div>
            </div>
        </section>
    );
}
