import logo from "/logo.png";
import background from "/background.png";

import "./style.css";
import ListCard from "../ListCard/ListCard";

const Layout = ({ children }) => {

    return (
        <>
            <img src={background} alt="background" className="background-image" ></img>
            <div className="page">
                <header tabIndex="0"><img alt="logo_app" src={logo} /> BOLÃO INTZ A2E </header>
                <div id="nav-container">
                    <div className="bg"></div>
                    <div className="button" tabIndex="0">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </div>
                    <div id="nav-content">
                        <ul>
                            <li><a href="/apostas"> Apostas</a></li>
                            <li><a href="/resultados">Resultados</a></li>
                            <li><a href="#0">Perfil</a></li>
                            <li><a href="#0">Sair</a></li>
                            <li className="small"><a>Versão: BETA</a><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vitor-gabriel-cesarino-232300200/">gabrielNZT</a></li>
                        </ul>
                    </div>
                </div>

                <main>
                    <div className="content">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
};
export default Layout;