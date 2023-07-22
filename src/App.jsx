import blob from "./assets/blob.svg";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";

function App() {
    return (
        <>
            <Header />
            <img className="blob" src={blob} alt="" />
            <div className="pageContent">
                <Home />
                <About />
                <Projects />
                <Contacts />
            </div>
        </>
    );
}

export default App;
