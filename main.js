// paralax da bolha
const handleScroll = evento => {
    const scrollPosition =
        evento
            .target
            .scrollingElement
            .scrollTop;

    const blob = document.getElementsByClassName(blob);

    blob.forEach((element) => {
        element.style.transform = `translate(0, ${scrollPosition / 10}px)`;
    });
};

window.addEventListener("scroll", handleScroll);
