import ProjectPage from "./ProjectPage";
import workingOnMobile from "../assets/workingOnMobile.png";
import workingOnWeb from "../assets/workingOnWeb.png";
import mobileCodeSphere from "../assets/mobileCodeSphere.png";
import webCodeSphere from "../assets/webCodeSphere.png";

export default function Projects() {
    return (
        <section id="projects">
            <div className="columnA">
                <h2>Projetos</h2>
                <p>Projetos próprios e de clientes:</p>
            </div>
            <div className="columnB">
                <ProjectPage
                    mobileExibition={workingOnMobile}
                    webExibition={workingOnWeb}
                    projectName={"Em Desenvolvimento!"}
                    projectDescription={
                        "Webapp de criação de Decks do jogo de cartas Yu-gi-oh."
                    }
                />
                <ProjectPage
                    mobileExibition={mobileCodeSphere}
                    webExibition={webCodeSphere}
                    projectName={"CodeSphere"}
                    projectDescription={
                        "Um site de uma agência fictícia focada em publicidade, design e desenvolvimento de sites."
                    }
                    projectUrl={"https://agencia-codesphere.netlify.app"}
                    projectGitHubUrl={
                        "https://github.com/AlexandreLaraJr/codeSphere"
                    }
                />
            </div>
        </section>
    );
}
