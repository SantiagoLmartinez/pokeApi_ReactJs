import React, {  } from 'react';
//import styled from 'styled-components';

const PokemonComp = ({pokedex = []}) => {
    //console.log(pokedex)

    return(
            <div className='row'>
            {
                pokedex.map((item,index) =>(
                    
                    <div key={index} className="col-2 ">

                        <div className='card mb-5 '>
                            <div className='bg-secondary'>
                                <img className='w-100' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt="" />
                            </div>
                            <div>
                                <p className='text-center w-100'><strong>{(item.name).toUpperCase()}</strong></p>
                                <p className='text-center'>#{(index +1).toString().padStart(3,'0')}</p>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
        </div>
        
    )
}

export default PokemonComp

// const PokemonStyled = styled.div`
//     .pkm-card{
//         background-color: blue;
//         width: 150px;
//         p{
//             color: red;
//         }
//     }

// `