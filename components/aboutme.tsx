import Image from "next/image"
import React from "react"
import Member from '../components/member'

import { Tile } from "./tile"



const Aboutme: React.FC = () => {
    return (

        <section className={`flex flex-col sticky bg-white-1500 pt-10 text-3xl md:text-4xl text-emerald-1500`}>
            <div className="container mx-auto pl-5">
                <span className="mb-6 text-red-1500 text-sm font-bold ">OUR WORK</span>
                <h2 className="mb-4 text-slate-1500 text-3xl font-bold">Websites</h2>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 container mx-auto ">
                <Tile id={'01'} name={'Web development'} text={'Gapsy is a digital agency specializing in mobile and web design and development, branding and animation.'}>
                
                </Tile>
                <Tile id={'02'} name={'C++ Enthusiast'} text={'Gapsy is a digital agency specializing in mobile and web design and development, branding and animation.'}>
                
                </Tile>
                <Tile id={'03'} name={'Mobile Development'} text={'Gapsy is a digital agency specializing in mobile and web design and development, branding and animation.'}>
                
                </Tile>
                <Tile id={'04'} name={'Student project'} text={'Gapsy is a digital agency specializing in mobile and web design and development, branding and animation.'}>
                
                </Tile>
            </div>
        </section>
    )
}
export default Aboutme
