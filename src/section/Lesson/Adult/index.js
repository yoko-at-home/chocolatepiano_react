import React from 'react';
import './styles.css';

import CardAdult from '../../../components/Card/Adult';

function LessonAdult() {
  return (
    <>
      <section className='section-adult'>
        <h1 className='adult__title' id='adult'>
          大人のレッスン
        </h1>
        <div className='lesson__wrapper'>
          <h3 className='adult__title-sub'>お好きな曲をマスターしませんか？</h3>
          <p className='adult__text'>
            昔ピアノを習っていてブランクがあるけど、また習いたい…。家にピアノがあるけど、誰も使っていなくてもったいない…。初めてだけど、憧れの曲を弾いてみたい！・・・等、ショコラピアノ教室では、それぞれのペースに合わせてレッスン致します。
          </p>
          <h3 className='adult__title-sub'>保育士さん・保育士さんを</h3>
          <h3 className='adult__title-sub2'>目指している方のレッスン</h3>
          <p className='adult__text'>
            お仕事で次々と演奏しなければならない曲などがございますよね。どうぞご相談下さいませ。丁寧にご指導致します♪♪♪
          </p>
          <CardAdult />
        </div>
      </section>
    </>
  );
}

export default LessonAdult;
