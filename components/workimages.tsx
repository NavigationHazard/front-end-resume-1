
import React from "react"
import Slider from "./slider"




  

const WorkImages: React.FC = () => {
    return (

        <section className={`flex flex-col sticky bg-white-1500 pt-10 text-3xl md:text-4xl text-emerald-1500`}>
       
        
   
            <div className="container mx-auto pl-5">
                <span className="mb-6 text-red-1500 text-sm font-bold ">OUR WORK</span>
                <h2 className="mb-4 text-slate-1500 text-3xl font-bold">Websites</h2>
                
                <Slider />
                
            </div>
        </section>
    )
}
export default WorkImages
