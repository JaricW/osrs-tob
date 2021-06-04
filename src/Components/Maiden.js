import React from "react";
import MaidenPicture from "../Images/MaidenPicture.png";

const Maiden = (props) => {
  return (
    <main class="flex bg-black ">
      <div class=" w-3/6 h-screen flex justify-center items-center">
        <img src={MaidenPicture} class="max-h-screen p-4" />
      </div>
      <div class="flex flex-col items-center justify-center gap-4 p-4 w-3/6">
        <h2 class="text-red-800 text-2xl">DO</h2>
        <ul class="text-purple-800 text-center">
          <li>Smack it with melee</li>
          <li>Pray Mage</li>
          <li>Dragon Warhammer Spec</li>
          <li>Freeze and kill the spiders (they'll heal her)</li>
        </ul>
        <h2 class="text-red-800 text-2xl">DON'T</h2>
        <ul class="text-purple-800 ">
          <li>Stand in the blood</li>
        </ul>
        <button
          class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black mt-10"
          onClick={props.tob}
        >
          Go Back
        </button>
      </div>
    </main>
  );
};

export default Maiden;
