// This is the Same Logic as for works

// TODO: This section is now unused, needs to be removed at somepoint as i changed the 
// dynamic content to a static one for the tools page 
// all tools pages can therefore be removed. 

import React, { useRef, useContext } from "react"
import { ScrollContext } from "../utils/scroll-observer"
// Need Props - number of pages
interface Props{
    id: string;
    name: string;
    text: string;
    children?: React.ReactNode;
}

/*  Export a tile (similar to skills - offset by scroll percent, and the number of pages)
    and return the current state of scroll state inside the tile.
    e.g. observers the tile content like the scrollobserver and lets the inside scroll
    while the tile it self does not move. */
export const Tile: React.FC<Props> = ({id, name, text, children}) => {
  
 // Return the tile - eg. scrollobserver   
    return (     
        <div className="top-0 w-full h-auto p-5 border-[1px] border-slate-300/25">
          <span className="mb-4 text-red-1500 lg:text-xl text-xs font-medium ">{id}</span>
          <h3 className="mb-4 text-slate-1500 lg:text-3xl text-xl font-medium ">{name}</h3>
          <p className="mb-4 text-slate-1500 lg:text-xl text-xs font-thin ">{text}{children}</p>
        
        </div>  
    )
}
export default Tile
