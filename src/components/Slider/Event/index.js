import React, { useState } from 'react';
import { Slide, LeftArrow, RightArrow } from '../slide';

import '../styles.css';
import Event1 from '../../../img/ensou-1.jpg';
import Event2 from '../../../img/ensou-2.jpg';
import Event3 from '../../../img/ensou-3.jpg';
import Event4 from '../../../img/ensou-4.jpg';
import Event5 from '../../../img/ensou-5.jpg';

const EventImageSlider = () => {
  const data = {
    images: [Event1, Event2, Event3, Event4, Event5],
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

export default EventImageSlider;
