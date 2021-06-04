import React from 'react'
import SotetsegPicture from "../Images/SotetsegPicture.png"

const Sotetseg = (props) => {
    return (
        <main class="flex bg-black flex-col md:flex-row">
        <div class=" md:w-3/6 md:h-screen flex flex-col justify-center items-center">
        <h2 class="text-white text-xl text-center p-4">Sotetseg</h2>
          <img src={SotetsegPicture} class="max-h-96 p-4" />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 p-4 md:w-3/6">
          <h2 class="text-red-800 text-2xl">DO</h2>
          <ul class="text-purple-800 text-center">
            <li>Protect Mage for red projectiles</li>
            <li>Protect Mage for grey projectiles</li>
            <li>Stand on the player who has a big red ball fired at him</li>
            <li>Smack it with melee</li>
            <li>Use one Dragon Warhammer at each phase</li>
            <li>Call out where the maze starts and run through it quickly</li>
          </ul>
          <h2 class="text-red-800 text-2xl">DON'T</h2>
          <ul class="text-purple-800 text-center">
            <li>Dump all Dragon Warhammer specs at the start</li>
          </ul>
          <button
            class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black mt-10"
            onClick={props.tob}
          >
            Go Back
          </button>
        </div>
      </main>
    )
}

export default Sotetseg
