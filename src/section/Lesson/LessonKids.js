import React from 'react'
import './LessonKids.styles.css'
import kids1 from '../../img/kids-1.jpg'
import kids2 from '../../img/kids-2.jpg'
import kids3 from '../../img/kids-3.jpg'
import kids4 from '../../img/kids-4.jpg'
import kids5 from '../../img/kids-5.jpg'
import kids6 from '../../img/kids-6.jpg'
import HorizontalScrollButtons from '../../components/HorizontalScrollButtons'
import CardKidsLesson from '../../components/CardKidsLesson'

function LessonKids() {
    return (
      <>
        <HorizontalScrollButtons />
        <section className='section-kids' id='kid'>
          <h1 className='kids__title'>子供のレッスン</h1>

          <div className='lesson__wrapper'>
            <CardKidsLesson />
            <div className='subsection__wrapper'>
              <h2 className='kids__title-sub'>レッスン風景</h2>
              <div className="photo_wrapper">
              <div className='row-kids'>
                  <div className='kids_composition'>
                    <img
                      src={kids2}
                      alt='ショコラピアノ教室 子供たちのレッスン風景1'
                      className='kids_composition__photo kids_composition__photo--p1'
                    />
                    <img
                      src={kids1}
                      alt='ショコラピアノ教室 子供たちのレッスン風景2'
                      className='kids_composition__photo kids_composition__photo--p2'
                    />
                    <img
                      src={kids4}
                      alt='ショコラピアノ教室 子供たちのレッスン風景3'
                      className='kids_composition__photo kids_composition__photo--p3'
                    />
                </div>
                </div>
                <div className='row-kids'>
                  <div className='kids_composition'>
                    <img
                      src={kids5}
                      alt='ショコラピアノ教室 子供たちのレッスン風景4'
                      className='kids_composition__photo kids_composition__photo--p1'
                    />
                    <img
                      src={kids3}
                      alt='ショコラピアノ教室 子供たちのレッスン風景5'
                      className='kids_composition__photo kids_composition__photo--p2'
                    />
                    <img
                      src={kids6}
                      alt='ショコラピアノ教室 子供たちのレッスン風景6'
                      className='kids_composition__photo kids_composition__photo--p3'
                    />
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default LessonKids
