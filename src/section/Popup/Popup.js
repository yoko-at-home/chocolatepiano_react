import React from 'react'
import { Link } from 'react-router-dom'
import './Popup.styles.css';

const Popup=()=> {
  return (
    <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left"></div>
                <div className="popup__right">
                    <Link to="/#contact" className="popup__close">×</Link>
                    <h2 className="heading-secondary u-margin-bottom-small">体験レッスンのご予約</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">無料体験レッスン(15分程度) 随時受付中！！<br/>その他、お気軽にお問い合わせください♪</h3>
                    <a href="#book-now"  className="btn btn--green">メール</a>&nbsp;
                    <a href="tel:0427576837"  className="btn btn--pink">お電話</a>&nbsp;
                    <a href="tel:09048201349"  className="btn btn--green">LINE</a>
                <div>
            <div className="popup__navigation">
                <ul className="popup__list">
                    <li className="popup__item"><a href="https://www.facebook.com/chocolatpianoa" className="popup__link" target="_blank" rel="noopener" ><img src='img/facebook-circled.png'style="width: 35px;"/></a></li>
                      <li className="popup__item" style='font-size: large;'><a href="https://profile.ameba.jp/ameba/chocolatpianoa/" className="popup__link" target="_blank" rel="noopener" ><sup>B l o g</sup></a></li>
                      <li className="popup__item"><a href="https://www.instagram.com/chocolatpianoa2019/" className="popup__link" target="_blank" rel="noopener"><img src='img/instagram-new.png' style="width: 35px;"/></a></li>
                </ul>
              </div>
          </div>
     </div>
        </div>
    </div>
  )
}

export default Popup
