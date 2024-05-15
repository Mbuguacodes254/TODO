import React from 'react'

export default function AddForm() {
  return (
    <div className= "bg-white py-2 lg:py-2 px-5 rounded-md">
      <form className= "flex items-center ">
        <div className= "relative w-full">
            <input className= "bg-white text-gray-900 text-sm lg:py-2 py-1 px-4 block w-full focus:outline-none " type= "text" placeholder= "create new task" required/>
        </div>
        <button className= "bg-[#37cafd] hover:bg-[#366fe1] inline-flex item-center py-2.5 px-3 lg:px-7 ml-2 text-xs font-medium text-white rounded">Add</button>
      </form>
    </div>
  )
}

