import React from "react";
import logo from "/public/imgs/logo-svg.svg";
import "/public/style/main.scss";

function Main() {
  return (
    <section id="inicio" className="cubo">
      {/* LADO ESQUERDO: TÍTULO + TEXTO */}
      <div className="cubo_text">
        <h1 className="cubo_title" aria-label="Pensar ao cubo é ir além">

          <p>
            <span className="laranja">PENSAR</span> AO
          </p>

          <p>CUBO É IR</p>

          <p className="azul">ALÉM</p>
        </h1>

        <p className="cubo_lead">
          Conheça nossos projetos, habilidades e o que nos inspira.
          Sinta a conexão entre nossa experiência e nossa paixão por criar.
        </p>
      </div>

      <div className="cubo_art">
        <img src={logo} alt="Cubo isométrico" />
      </div>
    </section>
  );
}

export default Main;
