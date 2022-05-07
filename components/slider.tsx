import * as React from "react"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
    
      perView: 2,
      spacing: 15,
    },
  })
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide"><Image src="/sliderimages/img3.png" height={600} width={650} objectFit="cover" alt="pedev" /></div>
      <div className="keen-slider__slide number-slide"><Image src="/sliderimages/img4.png" height={600} width={650} objectFit="cover" alt="pedev" /></div>
      <div className="keen-slider__slide number-slide"><Image src="/sliderimages/img5.png" height={600} width={650} objectFit="cover" alt="pedev" /></div>
      <div className="keen-slider__slide number-slide"><Image src="/sliderimages/img6.png" height={600} width={650} objectFit="cover" alt="pedev" /></div>
      <div className="keen-slider__slide number-slide"><Image src="/sliderimages/img8.png" height={600} width={650} objectFit="cover" alt="pedev" /></div>
      <div className="keen-slider__slide number-slide"><Image src="/sliderimages/img1.png" height={600} width={650} objectFit="cover" alt="pedev" /></div>
    </div>
  )
}
