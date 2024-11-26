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

export default function Cards({ characters,isLoading,onClose }) {

  return (
    <StyledCardsContainer>
      {characters.map(({id,name,status,species,gender,origin,image}) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin?.name}
            image={image}
            onClose={onClose}
          />
        );
      })
      }
    </StyledCardsContainer>
  );
}
