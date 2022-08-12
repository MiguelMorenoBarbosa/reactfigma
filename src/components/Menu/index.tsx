import React from "react";
import guitarra from "assets/img/logoguitarra.png"
import titulo from "assets/img/Titulo.png"
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
          <img src={guitarra} alt="logo" />
        </Link>
      </picture>
      <nav>
        <ul>
          <picture>
            <img src={titulo} alt="titulo" />
          </picture>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
