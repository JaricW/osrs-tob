import React from "react";
import VerzikPicture from "../Images/VerzikPicture.png";

const Verzik = (props) => {
  return (
    <main class="flex bg-black ">
      <div class=" w-3/6 h-screen flex justify-center items-center">
        <img src={VerzikPicture} class="max-h-screen p-4" />
      </div>
      <div class="flex flex-col items-center justify-center gap-6 p-4 w-3/6">
          <div class="flex flex-row text-center gap-8">
              <div>
        <h2 class="text-red-800 text-2xl p-4">Phase 1</h2>
        <ul class="text-purple-800 text-center">
            <li>Pray mage</li>
          <li>Hit her with Dawnbringer</li>
          <li>Use spec and pass to next player</li>
          <li>Hide behind pillar</li>
          <li>Move away from pillar when it's destroyed</li>
        </ul>
        </div>
        <div>
        <h2 class="text-red-800 text-2xl p-4">Phase 2</h2>
        <ul class="text-purple-800 text-center">
          <li>Pray range</li>
          <li>Melee attack between animations</li>
          <li>Run away from or freeze normal spiders</li>
          <li>Hit purple spiders with poison attack</li>
          <li>Protect from mage at 35%</li>
        </ul>
        </div>
        </div>
        <h2 class="text-red-800 text-2xl">Phase 3</h2>
        <ul class="text-purple-800 text-center">
          <li>Switch protection prayers</li>
          <li>One player kites</li>
          <li>Stand on yellow tiles when they appear</li>
          <li>Catch green ball next to each other</li>
          <li>Free each other from webs</li>
          <li>Dodge exploding spiders</li>
          <li>Don't get hit by a tornado</li>
          <li>Use Crystal Halberd specs when tornados spawn</li>
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

export default Verzik;
