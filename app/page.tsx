'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  const [charactersTyped, setCharactersTyped] = useState('')

  const chunkyCharactersTyped = charactersTyped.split('')

  var prompt = "In the whimsical realm of Starlight Glade, a curious young wizard named Willow sets out on a daring adventure to recover the scattered pieces of the Cosmic Crystal. Guide Willow through enchanted forests and shimmering meadows by typing with lightning speed, revealing ancient spells and restoring harmony to the realm"

  var chunkyprompt = prompt.split('')

  console.log(chunkyprompt)

  function checkCharacter(index: number, character: string) {
    if (chunkyprompt[index] === character) {
      return true;
    } else {
      return false
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div style={{
padding:20
      }}>
      {chunkyprompt.map((char, index) => {
        return <div style={{
          display: 'inline',
          color: checkCharacter(index, chunkyCharactersTyped[index]) ? 'orange' : 'purple'

        }} key={index} id={index.toString()}>{char}</div>
      })}
      </div>

      <label htmlFor="userInput">Enter text:</label>
      <input type="text" id="userInput" name="userInput" onChange={
        (event) => {
          console.log(event)
          setCharactersTyped(event.target.value)
        }
      }></input>
      {charactersTyped}
    </main>
  );
}
