import React from "react";
import TOBMainPicture from "../Images/TOBMainPicture.png";

const TOB = (props) => {
  return (
    <main class="flex">
      <div class=" w-3/6 h-screen ">
        <img src={TOBMainPicture} class="h-screen" />
      </div>
      <div class="flex flex-col items-center justify-center h-screen w-3/6 gap-6 bg-black">
      <button class="p-2 border-2 border-gray-500 rounded-xl text-gray-500 text-xl bg-black hover:bg-gray-500 hover:text-black w-64"
        onClick={props.equipment}>
          Equipment
        </button>
        <button class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black w-64"
        onClick={props.maiden}>
          The Maiden of Sugadinti
        </button>
        <button class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black w-64"
        onClick={props.bloat}>
          Pestilent Bloat
        </button>
        <button class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black w-64"
        onClick={props.nylocas}>
          Nylocas Vasilias
        </button>
        <button class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black w-64"
        onClick={props.sotetseg}>
          Sotetseg
        </button>
        <button class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black w-64"
        onClick={props.xarpus}>
          Xarpus
        </button>
        <button class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black w-64"
        onClick={props.verzik}>
          Verzik Vitur
        </button>
      </div>
    </main>
  );
};

export default TOB;
