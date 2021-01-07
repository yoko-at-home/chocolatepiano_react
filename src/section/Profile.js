import React from 'react'
import AyaTorigoe from '../img/profile-dress.jpg'
import MP4 from '../img/video.mp4'
import Webm from '../img/video.webm'
import './Profile.styles.css'

function ProfileSection() {
  return (
    <>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary' style={{fontSize:'5rem'}}>
          ご挨拶
        </h2>
      </div>
      <section
        className='section-stories u-margin-bottom-big'
        id='section-profile'
      >
        <div className='bg-video'>
          <video className='bg-video__content' autoPlay muted loop>
            <source src={MP4} type='video/mp4' />
            <source src={Webm} type='video/webm' />
            Your browser is not supported!
          </video>
        </div>
        <div className='bg-mobile'>
          <div className='bg-mobile__content'></div>
        </div>

        <div className='row'>
          <div className='story'>
            <figure className='story__shape'>
              <img
                src={AyaTorigoe}
                alt='とりごえ あや'
                className='story__img'
              />
              <figcaption className='story__caption'>
                講師: <br />
                とりごえ あや
              </figcaption>
            </figure>
            <div className='story__text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                ショコラピアノ教室のホームページへようこそ！
              </h3>
              <p style={{color:'#333'}}>
                ショコラピアノ教室講師、鳥越文（とりごえあや）です。ショコラピアノ教室は、相模原市南区大野台・古淵にあるアットホームなピアノ教室です。響きのよいグランドピアノをグランドピアノの豊かな響きを存分に味わいながら音楽表現ができます。また、個人レッスンなので、1人 １人それぞれのペースに合わせてレッスンする事が出来ます♪少しでもピアノが音楽が楽しい！！と感じていただけたら・・・と思いレッスンしています♪
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileSection
