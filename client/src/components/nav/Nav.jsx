import styled from "styled-components"

//Styles
//Mobile first approach
//Mobile widths

const StyledNav = styled.nav`
background-color: #030C26;
border: 9px solid #0DF205;
width: 80%;
color: #04BF68;
`
//Components
import SearchBar from "../searchBar/SearchBar"

//Nav component
function Nav({onSearch}){
    return (
        <StyledNav>
            <h2>Soy el nav</h2>
            <SearchBar onSearch={onSearch} />
        </StyledNav>
    )
}

//Export nav component
export default Nav