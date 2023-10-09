import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Router = () => {

    const logado = localStorage.getItem('@user');

    return (
        <BrowserRouter> {/*permite trabalhar com rotas (pai)*/}
            <Routes> {/*mostra uma rota ou outra*/}
                {!logado && <Route path="/" exact Component={Login} />} {/*a tal rota*/}
                {logado && <Route path="/" exact Component={Home} />}
            </Routes>
        </BrowserRouter>
    )
};

export default Router;