import logo from "/logo.png";

import "./style.css";

const Menu = () => {
    return (
        <>
            <div className="page">
                <header tabIndex="0"><img alt="logo_app" src={logo} /> BET FRIENDS </header>
                <div id="nav-container">
                    <div className="bg"></div>
                    <div className="button" tabIndex="0">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </div>
                    <div id="nav-content" tabIndex="0">
                        <ul>
                            <li><a href="#0">Suas apostas</a></li>
                            <li><a href="#0">Resultados</a></li>
                            <li><a href="#0">Perfil</a></li>
                            <li><a href="#0">Sair</a></li>
                            <li className="small"><a href="#0">Versão: 1.0</a><a href="#0">gabrielNZT</a></li>
                        </ul>
                    </div>
                </div>

                <main>
                    <div className="content">
                        EM DESENVOLVIMENTO
                    </div>
                </main>
            </div>
        </>
    );
};
export default Menu;