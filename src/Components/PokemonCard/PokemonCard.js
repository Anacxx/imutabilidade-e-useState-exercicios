import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'
//


const PokemonCard = ({pokemon, evolucaoPichu, setPokemon}) => {

    const evoluirPokemon = (novoPokemon) => {
      setPokemon(novoPokemon)
    }
    
  return (
    <Card color={pokemon.color}>
        <img src={pokemon.image} alt={`Pokemon`} width={100}/>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonType>{pokemon.type}</PokemonType>
        <p>{pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon(evolucaoPichu)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard