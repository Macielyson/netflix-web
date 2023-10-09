import React, { useState } from "react";
import Header from "../../components/Header";

import api from "../../services/api";

const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    });

    const login = async () => {
        // console.log(credenciais)
        try {
            const response = await api.post('/usuario/login', credenciais);
            const res = response.data;

            if (res.error) {
                // se for verdadeiro encerra por aqi
                alert(res.message);
                return false;
            }

            // se der certo faz a funçao de login
            // guardar dados no broser
            // @chave.
            localStorage.setItem('@user', JSON.stringify(res.usuario));
            // mandar o usuaio para home apenas em recarregar a pagina
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div
            class="container-fluid bg_filmes"
            style={{
                position: 'fixed',
                height: '100%'
            }}
        >
            <Header hideMenu /> {/*equivale como true*/}
            <div id="caixa_login" class="col-4 offset-4">
                <h1 class="text-white">Entrar</h1>
                <br />
                <> {/*tirando o forme*/}
                    <input type="email" class="form-control form-control-lg" placeholder="email ou numero de telefone"
                        onChange={(e) => {
                            setCredenciais({ ...credenciais, email: e.target.value })
                        }}
                    />
                    <br />
                    <input type="password" class="form-control form-control-lg" placeholder="senha"
                        onChange={(e) => {
                            setCredenciais({ ...credenciais, senha: e.target.value })
                        }}
                    />
                    <br />
                    <button class="btn btn-block btn-lg btn-danger" onClick={login}>Entrar</button>
                </>
                <div class="row mt-4">
                    <div class="col text-muted">
                        <input type="checkbox" /> Lembrar de mim.
                    </div>
                    <div class="col text-right">
                        <a href="#">Precisa de ajuda?</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;
