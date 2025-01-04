import React from 'react'

function sidebaritem({name , active ,handleClick}) {
  return (
    
    <button 
         onClick={handleClick}
         className={`p-2 w-[200px] hover:bg-gray-300  ${active?'bg-gray-200':'bg-gray-500'}`}>
        {name}
    </button>
  )
}

export default sidebaritem