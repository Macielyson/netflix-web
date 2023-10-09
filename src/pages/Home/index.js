import React, { useState, useEffect } from "react";
import Filme from "../../components/Filme";
import ModalFilme from "../../components/ModalFilme";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Secao from "../../components/Secao";

import api from "../../services/api";

const Home = () => {
    // LOGICA DO COMPONENTE
    /*
    const [filmes, setFilmes] = useState([]);
    const [filme, setFilme] = useState({
        nome: '',
        ano: 0,
        categoria: null
    });

    const cadastrar = () => {
        setFilmes([filme, ...filmes]);
    }

    useEffect(() => {
        alert("carregou")
    }, [filmes]);


    //a ideia da componentizazao é reutilizar o que se repete
    
    // RETORNAR O HTML DO COMPONENTE
    
    <div className="container">
    <br />
    <h1>Lista filmes</h1>
    <br />
    <div className="jumbotron">
        <div className="row">
            <div className="col-4">
                <label>
                    Nome:
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="nome do filme"
                    onChange={(e) => {
                        setFilme({
                            ...filme, // sprede operation
                            nome: e.target.value
                        });
                    }} />
            </div>
            <div className="col-4">
                <label>
                    Categoria:
                </label>
                <select
                    className="form-control"
                    onChange={(e) => {
                        setFilme({
                            ...filme, // sprede operation
                            categoria: e.target.value
                        });
                    }} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div className="col-4">
                <label>
                    Ano:
                </label>
                <input
                    type="number"
                    className="form-control"
                    onChange={(e) => {
                        setFilme({
                            ...filme, // sprede operation
                            ano: e.target.value
                        });
                    }}
                />
            </div>
        </div>
        <br />
        <button onClick={cadastrar} className="btn btn-lg btn-success btn-block">Cadastrar</button>
    </div>
    <br />
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">categoria</th>
                <th scope="col">Ano</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                filmes.map((filme) => (
                    <Filme filme={filme} />
                ))
            }
        </tbody>
    </table>
</div>
    */


    const [principal, setPrincipal] = useState({});
    const [secoes, setSecoes] = useState([]);


    // metodo para fazer as requisiçoes 
    const getHome = async () => {

        try {
            const response = await api.get('/home');
            const res = response.data;

            if (res.error) {
                alert(res.message)
                return false;
            }

            setPrincipal(res.principal); // hero
            setSecoes(res.secoes);
            //console.log(res);

        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getHome();
    }, []);

    return (
        <>
            <ModalFilme />

            <div class="container-fluid">
                <Header />
            </div>

            <Hero filme={principal} />

            <div id="main-content">
                {secoes.map((secao) => (
                    <Secao secao={secao} />
                ))}
            </div>
        </>
    )
}

export default Home;