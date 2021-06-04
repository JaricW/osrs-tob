import React from 'react'
import EquipmentPicture from "../Images/EquipmentPicture.PNG"
import InventoryPicture from "../Images/InventoryPicture.PNG"

const Equipment = (props) => {
    return (
        <main class="flex flex-col bg-black h-screen">
            <h2 class="text-white text-xl text-center p-4 mt-4">Equipment</h2>
            <div class="flex flex-col md:flex-row justify-center items-center mt-10">
      <div class=" w-3/6 h-10/12 flex justify-center items-center">
        <img src={EquipmentPicture} class="max-h-screen p-4" />
      </div>
      <div class=" w-3/6 h-10/12 flex justify-center items-center">
        <img src={InventoryPicture} class="max-h-screen p-4" />
      </div>
      </div>
      <div class="flex justify-center">
        <button
          class="p-2 border-2 border-red-800 rounded-xl text-red-800 text-xl bg-black hover:bg-red-800 hover:text-black mt-10 w-32"
          onClick={props.tob}
        >
          Go Back
        </button>
        </div>
     
    </main>
    )
}

export default Equipment
