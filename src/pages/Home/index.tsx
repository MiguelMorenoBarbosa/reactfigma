import React from "react";
import principal from "assets/img/principal.png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "../../services/dados";


const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={principal} alt="Imagens principais" />
        <aside>
            {dados && dados.map((item) => <CardComponent dados={item} />)}
          </aside>
      </picture>
    </S.Home>
  );
};

export default Home;
