import PropTypes from "prop-types";

ContactsSocialLink.propTypes = {
    socialURL: PropTypes.string,
    imgSource: PropTypes.string,
    imageAlt: PropTypes.string,
    socialNetworkName: PropTypes.string,
};

export default function ContactsSocialLink({
    socialURL,
    imgSource,
    imageAlt,
    socialNetworkName,
}) {
    return (
        <div className="socialLink">
            <a target="_blank" href={socialURL}>
                <img
                    href={socialURL}
                    className="imageContact"
                    src={imgSource}
                    alt={imageAlt}
                />
            </a>
            <a target="_blank" href={socialURL}>
                <p>{socialNetworkName}</p>
            </a>
        </div>
    );
}
