import React from 'react';
import './styles.css';

function HeaderSection() {
  return (
    <>
      <header className='header ' id='top'>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>
              <sup>相模原 古淵 大野台</sup>
              <br />
              ショコラピアノ教室🎹
            </span>
            <span className='heading-primary--main_mobile'>
              <sup>
                相模原
                <br />
                古淵
                <br />
                大野台
              </sup>
              <br />
              ショコラピアノ
              <br />
              教室
              <br />
              🎹
            </span>
            <span className='heading-primary--sub'>is where you bloom</span>
          </h1>
        </div>
      </header>
    </>
  );
}

export default HeaderSection;
