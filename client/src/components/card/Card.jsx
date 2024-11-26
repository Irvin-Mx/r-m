import styled from "styled-components"

//Styles
const StyledCardDiv = styled.div`
background-color: #030C26;
border: 9px solid #0DF205;
width: 80%;
color: #04BF68;
`
const StyledCardH1 = styled.h2`
color:red;
`

//Card component
export default function Card({onClose,status,gender,species,origin,image,name,id}) {

   const handleClick = () => {
      console.log(id)
      onClose(id)
   }

   return (
      <StyledCardDiv>
         <button onClick={handleClick}>X</button>
         <StyledCardH1>Name:{name}</StyledCardH1>
         <h2>Status:{status}</h2>
         <h2>Gender:{gender}</h2>
         <h2>Species:{species}</h2>
         <h2>Origin:{origin}</h2>
         <img src={image} alt={name} /> 
      </StyledCardDiv>
   );
}
