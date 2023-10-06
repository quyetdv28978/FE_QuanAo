import React from "react"
import clsx from "clsx"
import OwlCarousel from 'react-owl-carousel';

import SlideCss from '../../css/include/slide.module.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import slide1 from '../../images/slide/slide-01.jpg';
import slide2 from '../../images/slide/slide-02.jpg';
import slide3 from '../../images/slide/slide-03.jpg';


function Slide() {
  return (
    <div className={clsx(SlideCss.slide)} >
      <OwlCarousel items={1} autoplay={true}
        className="owl-theme"
        loop
      >
        <div className="itemSlide"><img className={clsx(SlideCss.img)} src={slide1} alt="img" /></div>
        <div className="itemSlide"><img className={clsx(SlideCss.img)} src={slide2} alt="img" /></div>
        <div className="itemSlide"><img className={clsx(SlideCss.img)} src={slide3} alt="img" /></div>
      </OwlCarousel>
    </div>
  )
}

export default Slide