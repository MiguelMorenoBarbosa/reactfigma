import React from "react";
import principal from "assets/img/Group 2.jpg";
import * as S from "./styles";
import { CardComponent } from "components";


const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={principal} alt="Imagens principais" />
      </picture>
    </S.Home>
  );
};

export default Home;
