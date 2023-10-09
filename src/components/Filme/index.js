import React from "react";

const Filme = ({ filme }) => {

    const selectFilme = () => {
        const event = new CustomEvent('selectFilme', {
            detail: filme,
        });

        window.dispatchEvent(event);
    };

    return (
        <li class="filme" onClick={selectFilme} data-bs-toggle="modal" data-bs-target="#filme-modal">
            <img src={filme.thumb} alt="" class="img-fluid" />
            <div class="filme-infor">
                <div class="col-12">
                    <a href="" class="btn btn-custom-round btn-light rounded-circle">
                        <span class="mdi mdi-play"></span>
                    </a>
                    <a href="" class="btn btn-custom-round border-white rounded-circle opacity-50">
                        <span class="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a href="" class="btn btn-custom-round border-white rounded-circle opacity-50">
                        <span class="mdi mdi-thumb-down text-white"></span>
                    </a>
                    <a href="" class="btn btn-custom-round border-white rounded-circle opacity-50">
                        <span class="mdi mdi-plus text-white"></span>
                    </a>
                </div>
                <p>T3:EP5 <text>" Meu epsodio"</text></p>

            </div>
        </li>
    )

}

export default Filme;