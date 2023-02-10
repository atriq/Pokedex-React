import React from 'react'
import './style.css'

export default function PokemonList({pokemon}) {
  return (
    <div>
      <h1>PokemonList</h1>
      {pokemon.map(p => (
        <div className="pokemon" key={p}>{p}</div>
      ))}
    </div>
  )
}
