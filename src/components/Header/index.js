import React, { useEffect, useState } from "react";

const Header = ({ hideMenu }) => {

    const [user, setUser] = useState({});

    useEffect((e) => {
        setUser(JSON.parse(localStorage.getItem('@user')));
    }, []);

    const logout = () => {
        localStorage.clear(); //limpa tudo
        window.location.reload();
    }

    return (
        <header class="row">
            <div class="col-2">
                <img src={require("../../assets/logo.png")} alt="" />
            </div>
            {!hideMenu && (
                <div class="col-8">
                    <ul class="menu_list">
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="">Series</a>
                        </li>
                        <li>
                            <a href="">Filmes</a>
                        </li>
                        <li>
                            <a href="">Mais recentes</a>
                        </li>
                        <li>
                            <a href="">Minha lista</a>
                        </li>
                    </ul>
                </div>
            )}
            <div className="col-2 text-right">
                <a onClick={logout} className="text-white">Olá, {user?.nome}. Sair</a> {/*{user?.nome} */}
            </div>



        </header>
    );
}

export default Header;