import React from 'react'
import XarpusPicture from "../Images/XarpusPicture.png"

const Xarpus = (props) => {
    return (
        <main class="flex flex-col md:flex-row bg-black ">
        <div class="md:w-3/6 md:h-screen flex flex-col justify-center items-center">
        <h2 class="text-white text-xl text-center p-4">Xarpus</h2>
          <img src={XarpusPicture} class="max-h-96 p-4" />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 p-4 md:w-3/6">
          <h2 class="text-red-800 text-2xl">DO</h2>
          <ul class="text-purple-800 text-center">
            <li>Stand on the skeletons spawning at the start</li>
            <li>Dragon Warhammer spec once he gets up</li>
            <li>Use range after speccing</li>
            <li>Walk 2 tiles away from the poison blobs</li>
            <li>Stand in a corner in the third phase</li>
          </ul>
          <h2 class="text-red-800 text-2xl">DON'T</h2>
          <ul class="text-purple-800 text-center">
            <li>Pray anything</li>
            <li>Hit him when he's looking at you in the third phase </li>
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

export default Xarpus
