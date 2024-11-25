import styled from "styled-components";

import { useState } from "react";

//Components
import Card from "../card/Card";
import Loader from "../loader/Loader";

//Styles
const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
`

export default function Cards({ characters,isLoading }) {

  console.log(characters)

  return (
    <StyledCardsContainer>
      {isLoading ? <Loader/>  : characters.map((item) => {
        return (
          <Card
            key={item?.id}
            name={item?.name}
            status={item?.status}
            species={item?.species}
            gender={item?.gender}
            origin={item?.origin?.name}
            image={item?.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })
      }
    </StyledCardsContainer>
  );
}
