import React, { useState } from 'react'
import Image from 'next/image'
function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute left-0 h-screen w-screen top-20 bg-slate-1500 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
          
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col bg-slate-1500 justify-content'>
        <nav className="bg-slate-1500 lg:min-w-[960px] lg:h-24 lg:pt-2 mx-auto ">
            <MobileNav open={open} setOpen={setOpen}/>
             <div className=" container flex justify-center items-center lg:min-w-[1260px] w-full min-w-[330px]">

                <div className="z-50 flex relative w-8  h-4 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-[2px] w-full bg-white-1500 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`h-[2px] w-full bg-white-1500 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
                <div className="flex justify-start lg:scale-150 scale-[0.7]">
                    <Image src="/assets/logos/logobig.svg" alt="logo" height={100} width={230} />
                </div>
        
                <div className="hidden md:flex text-white-1500 xl:text-xl lg:px-10">
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                </div>
                <div className="w-[50%] flex justify-end mr-0 ml-auto items-start pl-0 lg:scale-150 scale-[0.8]  ">
               
                   <button className='bg-red-1500 py-2 px-4 text-white-1500 rounded-[3px] text-[0.7em]' > CONTACT US</button>
                    
                
                </div>
            </div>
        </nav></div>
      )
}