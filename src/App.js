import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {

  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })
  const evolucaoPichu = {
    name: "pikachu",
    type: "Electric",
    evolved: true,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png',
    id: 0

  }
  const [munchlax, setMunchlax] = useState({
    name: "Munchlax",
    type: "Normal",
    evolved: false,
    weight: 105,
    color: 'blue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/5/57/0446Munchlax.png/250px-0446Munchlax.png',
    id: 0
  })
  const evolucaoMunchlax = {
    name: "Snorlax",
    type: "Normal",
    evolved: true,
    weight: 460,
    color: '#A7A877',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/3f/0143Snorlax.png/250px-0143Snorlax.png',
    id: 0
  }
  return (<>
    <GlobalStyles />
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
        pokemon={pokemon}
        evolucaoPichu={evolucaoPichu}
        setPokemon={setPokemon}
      />
      <PokemonCard
        pokemon={munchlax}
        evolucaoPichu={evolucaoMunchlax}
        setPokemon={setMunchlax}
      />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
// MUITO OBRIGADAAAAA BRRRRRRRRRRRRRRRRRRRRRR <3
  );
}

export default App;
