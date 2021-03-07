import React from 'react';
import Logo from '../../img/logo-white.png';
import LogoGreenSmall2 from '../../img/logo-green-small-2x.png';
import Facebook from '../../img/facebook-circled.png';
import Instagram from '../../img/instagram-new.png';
import './styles.css';

function FooterSection() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            <img
              className='footer__logo-sm'
              alt='ショコラピアノ教室ロゴ'
              src={LogoGreenSmall2}
              media={{ maxWidth: '37.5em' }}
            />
            <img
              className='footer__logo-lg'
              alt='ショコラピアノ教室ロゴ'
              src={Logo}
            />
          </picture>
        </div>
        <div className='footer_row'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a
                  href='https://www.facebook.com/chocolatpianoa'
                  className='footer__link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={Facebook}
                    style={{ width: '35px' }}
                    alt='facebook'
                  />
                </a>
              </li>
              <li className='footer__item' style={{ fontSize: 'large' }}>
                <a
                  href='https://profile.ameba.jp/ameba/chocolatpianoa/'
                  className='footer__link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <sup>B l o g</sup>
                </a>
              </li>
              <li className='footer__item'>
                <a
                  href='https://www.instagram.com/chocolatpianoa2019/'
                  className='footer__link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={Instagram}
                    style={{ width: '35px' }}
                    alt='instagram'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
