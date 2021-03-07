import React from 'react';
import './styles.css';

import CardOnline from '../../../components/Card/Online';

function LessonOnline() {
  return (
    <>
      <section className='section-online'>
        <h2 className='online__title' id='online'>
          オンラインレッスン
        </h2>
        <h2 className='adult__title-sub'>コロナ対策として始めました</h2>
        <div className='lesson__wrapper'>
          <CardOnline />
        </div>
      </section>
    </>
  );
}

export default LessonOnline;
