import React from 'react'
import './LessonOnline.styles.css'
import HorizontalScrollButtons from '../../components/HorizontalScrollButtons'
import CardOnlineLesson from '../../components/CardOnlineLesson'

function LessonOnline() {
  return (
      <>
        <HorizontalScrollButtons />
    <section className='section-online' id='online'>
        <h2 className='online__title'>オンラインレッスン</h2>
          <h2 className='adult__title-sub'>コロナ対策として始めました</h2>
          <div className='lesson__wrapper'>
            <CardOnlineLesson />

      </div>
    </section>
      </>
  )
}

export default LessonOnline
