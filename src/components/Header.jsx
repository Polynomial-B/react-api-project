import React from 'react'
import charactersOfMiddleEarth from '../assets/bookId'




export default function Header({setCharacter}) {
    const characters = charactersOfMiddleEarth
    
    
    function handleGetCharacter(e) {
        console.log(e.target.innerHTML)
        setCharacter(e)
    }


  return <>
    {characters.map(character =>
    <button
    key={character.id}
    onClick={(e) => handleGetCharacter(e)}>{character.name ?? "Button"}
    </button>)}
  </>
}
