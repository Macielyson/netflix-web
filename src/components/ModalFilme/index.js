import React, { useEffect, useState } from "react";
import Epsodio from "../Epsodio";
import api from "../../services/api";

const ModalFilme = () => {

    const [filme, setFilme] = useState({});
    const [episodeos, setEpisodeos] = useState([]);

    const selectFilmeListener = () => {
        window.addEventListener('selectFilme', (data) => {
            setFilme(data.detail);
        });
    }

    useEffect(() => {
        const selectFilmeListener = (data) => {
            setFilme(data.detail);
            console.log(data.detail);
        };

        window.addEventListener('selectFilme', selectFilmeListener);
        // Remova o ouvinte quando o componente for desmontado para evitar vazamentos de memória.
        return () => {
            window.removeEventListener('selectFilme', selectFilmeListener);
        };
    }, []);

    const getEpisodeos = async (temporada_id) => {
        try {
            const response = await api.get(`/episodio/temporada/${temporada_id}`);
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }

            setEpisodeos(res.episodios);
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        if (filme.tipo == "serie") {
            getEpisodeos(filme?.temporadas[0]?._id);
        }
    }, [filme]);

    return (
        <div class="modal fade" id="filme-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-hero" style={{ backgroundImage: `url(${filme.capa})` }}>
                        <img src={filme.logo} />
                        <div class="col-12 modal-hero-infos">

                            <button class="btn btn-lg btn-custom-white"><span class="mdi mdi-play"></span>
                                Assistir
                            </button>
                            <a href="" class="btn btn-custom-round btn-lg btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="" class="btn btn-custom-round btn-lg border-white rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="" class="btn btn-custom-round btn-lg border-white rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-down text-white"></span>
                            </a>

                        </div>
                    </div>
                    <div class="modal-infos">
                        <div class="container">
                            <div class="row">
                                <div class="col-7">
                                    <p class="filme-descricao">{filme.descricao}
                                    </p>
                                </div>
                                <div class="col-5">
                                    <p class="filme-elenco">
                                        Elenco: <text>{filme.elenco?.join(', ')}</text>{/*join uma propriedade do js*/}
                                        <br />
                                        <br />
                                        Gênero: <text>{filme.generos?.join(', ')}</text>
                                        <br />
                                        <br />
                                        Cenas e momentos: <text> aqui precisa ser ajeitado</text>
                                    </p>
                                </div>
                            </div>
                            <br />
                            {filme.tipo == "serie" && <>
                                <div class="row">
                                    <div class="col-7">
                                        <h3 class="text-white">Epsodes</h3>
                                    </div>
                                    <div class="col-5 text-right">
                                        <select
                                            onChange={(e) => {
                                                getEpisodeos(e.target.value)
                                            }}
                                            class="form-control">
                                            {/*buscando as temporadas*/}
                                            {filme.temporadas?.map((temporada) => (
                                                <option value={temporada._id}>
                                                    {temporada.titulo}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <ul id="lista-epsodios">
                                        {episodeos.map((episodeo) => (
                                            <Epsodio episodeo={episodeo} />
                                        ))};
                                    </ul>
                                </div>
                            </>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ModalFilme;