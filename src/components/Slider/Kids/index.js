import React, { useState } from 'react';
import { Slide, LeftArrow, RightArrow } from '../slide';

import '../styles.css';
import kids1 from '../../../img/kids-1.jpg';
import kids2 from '../../../img/kids-2.jpg';
import kids3 from '../../../img/kids-3.jpg';
import kids4 from '../../../img/kids-4.jpg';
import kids5 from '../../../img/kids-5.jpg';
import kids6 from '../../../img/kids-6.jpg';

const KidsImageSlider = () => {
  const data = {
    images: [kids1, kids2, kids3, kids4, kids5, kids6],
  };

  const [index, setIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const PrevSlide = () => {
    if (index === 0) {
      setTranslateValue(translateValue);
    } else {
      setIndex(index - 1);
      setTranslateValue(translateValue + slideWidth());
    }
  };

  const NextSlide = () => {
    if (index === data.images.length - 1) {
      setIndex(0);
      setTranslateValue(0);
    } else {
      setIndex(index + 1);
      setTranslateValue(translateValue + -slideWidth());
    }
  };

  const slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  return (
    <div className='slider'>
      <div
        className='slider-wrapper'
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 0.45s',
        }}
      >
        {data.images.map((img, i) => (
          <Slide key={`${i}-${img}`} image={img} />
        ))}
      </div>
      <LeftArrow PrevSlide={PrevSlide} />
      <RightArrow NextSlide={NextSlide} />
    </div>
  );
};

export default KidsImageSlider;
