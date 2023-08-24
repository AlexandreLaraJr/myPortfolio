import ProjectPage from "./ProjectPage";
import workingOnMobile from "../assets/workingOnMobile.png";
import workingOnWeb from "../assets/workingOnWeb.png";

export default function Projects() {
    return (
        <section id="projects">
            <div className="columnA">
                <h2>Projetos</h2>
                <p>Projetos de clientes e projetos próprios</p>
            </div>
            <div className="columnB">
                <ProjectPage
                    mobileExibition={workingOnMobile}
                    webExibition={workingOnWeb}
                    projectName={"Em Desenvolvimento!"}
                    projectDescription={
                        "Projeto referente a um de meus hobbies favoritos, café!"
                    }
                />
                <ProjectPage
                    mobileExibition={workingOnMobile}
                    webExibition={workingOnWeb}
                    projectName={"Em Prototipagem!"}
                    projectDescription={"No momento, algo secreto..."}
                />
            </div>
        </section>
    );
}
