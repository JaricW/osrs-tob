import React from 'react'
import SotetsegPicture from "../Images/SotetsegPicture.png"

const Sotetseg = (props) => {
    return (
        <main class="flex bg-black ">
        <div class=" w-3/6 h-screen flex justify-center items-center">
          <img src={SotetsegPicture} class="max-h-screen p-4" />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 p-4 w-3/6">
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
