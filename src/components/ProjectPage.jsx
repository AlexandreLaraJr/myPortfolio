import PropTypes from "prop-types";
import githubLogo from "../assets/github.svg";
import arrowGoTo from "../assets/arrowGoTo.svg";

ProjectSlider.propTypes = {
    webExibition: PropTypes.string,
    mobileExibition: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
};

export default function ProjectSlider({
    webExibition,
    mobileExibition,
    projectName,
    projectDescription,
}) {
    return (
        <div className="project">
            <div className="projectExibition">
                <img className="webExibition" src={webExibition} alt="" />
                <img className="mobileExibition" src={mobileExibition} alt="" />
            </div>
            <div className="description">
                <div className="projectAbout">
                    <h4>{projectName}</h4>
                    <p>{projectDescription}</p>
                </div>
                <div className="pagesURL">
                    <a href="" className="githubImage">
                        <img className="githubImage" src={githubLogo} alt="" />
                    </a>
                    <a href="" className="websiteShow">
                        Visite!
                    </a>
                </div>
            </div>
        </div>
    );
}
