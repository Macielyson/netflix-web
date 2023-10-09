import React from "react";

const Epsodio = ({ episodeo }) => {
    return (
        <li>
            <div class="row">
                <div class="col-1 my-auto text-center">
                    <h3 class="text-white">{episodeo.numero}</h3>
                </div>
                <div class="col-4">
                    <img class="img-fluid" src={episodeo.capa} alt="" />
                </div>
                <div class="col-7">
                    <h6 class="text-white">{episodeo.titulo}</h6>
                    <p class="text-white text-muted">{episodeo.descricao}</p>
                </div>
            </div>

        </li>
    )
}
export default Epsodio;