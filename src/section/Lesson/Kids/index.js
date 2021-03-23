import React from 'react';
import './styles.css';

import HorizontalScrollButtons from '../../../components/HorizpntalScrollButtons';
import CardKids from '../../../components/Card/Kids';
import KidsImageSlider from '../../../components/Slider/Kids';

function LessonKids() {
  return (
    <>
      <br />
      <HorizontalScrollButtons />
      <br />
      <section className='section-kids'>
        <h1 className='kids__title' id='kid'>
          子供のレッスン
        </h1>

        <div className='lesson__wrapper'>
          <CardKids />
          <h2 className='kids__title-sub'>レッスン風景</h2>
          <KidsImageSlider />
        </div>
      </section>
    </>
  );
}

export default LessonKids;
