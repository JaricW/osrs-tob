import React from 'react'
import BloatPicture from "../Images/BloatPicture.png"

const Bloat = (props) => {
    return (
        <main class="flex bg-black flex-col md:flex-row">
        <div class=" md:w-3/6 md:h-screen flex flex-col justify-center items-center">
        <h2 class="text-white text-xl text-center p-4">Pestilent Bloat</h2>
          <img src={BloatPicture} class="max-h-96 p-4" />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 p-4 md:w-3/6">
          <h2 class="text-red-800 text-2xl">DO</h2>
          <ul class="text-purple-800 text-center">
            <li>Smack it with melee</li>
            <li>Pray Range</li>
            <li>Crystal Halberd Spec</li>
            <li>Stay out of line of sight</li>
            <li>Wear a salve amulet</li>
            <li>Do 4-6 hits each time it stops</li>
          </ul>
          <h2 class="text-red-800 text-2xl">DON'T</h2>
          <ul class="text-purple-800 text-center">
            <li>Get in line of sight while he's moving around</li>
            <li>Get hit by the falling hands</li>
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

export default Bloat
