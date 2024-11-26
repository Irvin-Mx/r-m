import styled from "styled-components"

//Hooks
import {useState} from "react"

//Styles
const StyledDiv = styled.div`
background-color: #030C26;
border: 9px solid #0DF205;
width: 80%;
color: #04BF68;
margin: auto;
display:flex;
justify-content: center;
`

//Export SearchBar Component
export default function SearchBar({onSearch}) {
   const [id,setId] = useState("")

   //
   function handleChange(e){
      setId(e.target.value)
   }

   const handleClick = () => {
      onSearch(id)
      setId("")
   }

   
   return (
      <StyledDiv>
         <input type="search" onChange={(e)=>handleChange(e)} value={id}/>
         <button onClick={handleClick} >Add Character</button>
      </StyledDiv>
   );
}
