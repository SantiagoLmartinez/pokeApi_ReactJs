import React, {  } from 'react';
//import styled from 'styled-components';

const NavbarComp = ({pokedex = []}) => {
    //console.log(pokedex)

    return(
            <div className='header bg-primary'> 
                <h1>Pokedex</h1>
            </div>
        
    )
}

export default NavbarComp

// const NavbarStyled = styled.div`
// *{margin:0; padding:0; }

//     .header{
//         width: 100%;
//         height: 50px;
//         background-color: blue;
//         margin-bottom: 20px;
//         padding: 1em;

//         h1{
//             margin: 0;
//             padding: 0;
//         }
//     }

//`