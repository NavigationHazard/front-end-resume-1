import React, {useRef, useContext} from 'react'
import ScrollObserver, { ScrollContext } from '../utils/scroll-observer'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

// Displays a video intron on page load
const Landingpage: React.FC = () => {

// Load the refcontainer and set the current value for scrollY to scroll context,
// this wil be updated constant from the scroll observer
    const refContainer = useRef<HTMLDivElement>(null)
    const {scrollY} = useContext(ScrollContext)

// needs to be initialzed before andit can calculate the container height when scrolling down
    let progress = 0
    const { current: elContainer } = refContainer
    if(elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

// Content
    return (

        <div ref={refContainer} style={{transform: `translateY(-${progress*20}vh)` }}
            className="min-h-screen  bg-slate-1500 flex items-start justify-center flex-col-3  sticky top-0 -z-10  ">
            <div className='flex h-[75vh] '>   
            <div className='order-1 px-5 w-[5%] flex justify-center items-end'>
                <ul className='list-none '>
                    <li className='pb-2'>
                    <SocialIcon network="pinterest" url="https://linkedin.com/in/jaketrent" bgColor='#fbfbfb' style={{ height: 25, width: 25 }} />
                    </li>
                    <li className='pb-2'>
                    <SocialIcon network="github" url="https://linkedin.com/in/jaketrent" bgColor='#fbfbfb' style={{ height: 25, width: 25 }} />
                    </li>
                    <li className='pb-2'>
                    <SocialIcon network="twitter" url="https://linkedin.com/in/jaketrent" bgColor='#fbfbfb' style={{ height: 25, width: 25 }} />
                    </li>
                    <li className='pb-2'>
                    <SocialIcon network="facebook" url="https://linkedin.com/in/jaketrent" bgColor='#fbfbfb' style={{ height: 25, width: 25 }} />
                    </li>
                </ul>
               
            </div>
            <div className="order-2 font-bold z-10 p-5  flex-1 flex items-start justify-start flex-col" >
                <span className="mb-2 xl:text-md text-md  text-red-1500 transition-opacity"  >WE ARE GAPSY</span>
                <h2 className="mb-2  xl:text-7xl lg:max-w-6xl max-w-4xl lg:text-5xl  text-3xl text-white-1500 tracking-tight">Design studio that creates new possibilities</h2>
                <h2 className='text-xl font-light text-white-1500/50'>Gapsy is a digital agency specializing in mobile 
                and web design and development, branding and animation.</h2>
            </div>

{/* Points down */}

            <div className="order-3 w-[10%] p-3">
            <Image src="/assets/down.svg" width={25} height={75} alt="logo" />
            </div>
</div> 
{/* End of content */}
        </div>
    )
}
export default Landingpage
