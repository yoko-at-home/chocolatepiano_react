import React from 'react';
import './styles.css';
import happyoukai1 from '../../img/happyoukai-1.jpg';
import happyoukai2 from '../../img/happyoukai-2.jpg';
import happyoukai3 from '../../img/happyoukai-3.jpg';
import happyoukai4 from '../../img/happyoukai-4.jpg';
import Happyoukai from '../../components/ExpandingCards/Happyoukai';
import ChristmasParty from '../../components/ExpandingCards/ChristmasParty';

import HorizontalScrollButtons from '../../components/HorizpntalScrollButtons';
import EventImageSlider from '../../components/Slider/Event';

function EventSection() {
  return (
    <section className='section-activity'>
      <h1 className='event__title' id='event'>
        年間行事・イベント
      </h1>
      <h2 className='event__title'>発表会</h2>
      <h3 className='event__title-sub'>100回の練習より1回の本番</h3>
      <p className='event__text'>
        ショコラピアノ教室では、年に一度近隣のホールで発表会を行っています。本番で得るものは多く、参加する生徒さん皆さん毎回、とても大きな成長を遂げます。
      </p>

      <div className='row-event'>
        <div className='event_composition'>
          <img
            src={happyoukai3}
            alt='ショコラピアノ教室発表会風景7'
            className='event_composition__photo event_composition__photo--p1'
          />
          <img
            src={happyoukai2}
            alt='ショコラピアノ教室発表会風景8'
            className='event_composition__photo event_composition__photo--p2'
          />
          <img
            src={happyoukai1}
            alt='ショコラピアノ教室発表会風景9'
            className='event_composition__photo event_composition__photo--p3'
          />
        </div>
      </div>

      <Happyoukai />
      <div className='row-event'>
        <div className='event_composition'>
          <img
            src={happyoukai1}
            alt='ショコラピアノ教室発表会風景7'
            className='event_composition__photo event_composition__photo--p1'
          />
          <img
            src={happyoukai4}
            alt='ショコラピアノ教室発表会風景8'
            className='event_composition__photo event_composition__photo--p2'
          />
          <img
            src={happyoukai3}
            alt='ショコラピアノ教室発表会風景9'
            className='event_composition__photo event_composition__photo--p3'
          />
        </div>
      </div>
      <HorizontalScrollButtons />

      <div className='section-activity' id='christmas'>
        <h2 className='event__title'>クリスマス会</h2>
        <p className='event__text'>
          12月には生徒さん同士交流してお友達なってほしいな。という願いも込めてリスマス会を開催しております。
        </p>
        <ChristmasParty />
        <HorizontalScrollButtons />
      </div>
      <div className='section-activity' id='activity'>
        <h2 className='event__title'>講師演奏活動</h2>
        <p className='event__text'>&nbsp;</p>
        <EventImageSlider />
      </div>
      <HorizontalScrollButtons />
    </section>
  );
}

export default EventSection;
