import React from "react";

const Hero = ({ filme }) => {
    return (
        <div id="hero" class="container-fluid" style={{ backgroundImage: `url(${filme.capa})` }}>
            <div class="container">
                <div class="row" id="hero_infos">
                    <div class="col-6">
                        <img class="logo" src={filme.logo} alt="" />
                        <h1 class="text-white">
                            {/*o fundo esta com style css. vai mudar*/}
                            <img src={require("../../assets/badge-10.png")} alt="" />Top 1 de hoje no Brasil.
                        </h1>
                        <p class="text-white">{filme.descricao?.substr(0, 190)}...</p> {/*limita a descao: se tiver essa propiedade ele vai limitar ela*/}
                        <br />
                        <button class="btn btn-lg btn-custom-white"><span class="mdi mdi-play"></span>
                            Assistir</button>
                        <button class="btn btn-lg btn-custom-translucent"><span class="mdi mdi-information-outline"></span>
                            Mais
                            Infomações</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;