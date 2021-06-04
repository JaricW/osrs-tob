import React from 'react'
import NylocasPicture from "../Images/NylocasPicture.png"

const Nylocas = (props) => {
    return (
        <main class="flex bg-black ">
        <div class=" w-3/6 h-screen flex justify-center items-center">
          <img src={NylocasPicture} class="max-h-screen p-4" />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 p-4 w-3/6">
          <h2 class="text-red-800 text-2xl">DO</h2>
          <ul class="text-purple-800 text-center">
            <li>Hit the white ones with melee</li>
            <li>Hit the green ones with range</li>
            <li>Hit the blue ones with mage</li>
            <li>Be ready to switch style for the boss</li>
            <li>Pray the same colour as the boss</li>
          </ul>
          <h2 class="text-red-800 text-2xl">DON'T</h2>
          <ul class="text-purple-800 text-center">
            <li>Pray until the boss comes out</li>
            <li>Hit the boss with the wrong style</li>
            <li>Let all 4 pillars die</li>
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

export default Nylocas
