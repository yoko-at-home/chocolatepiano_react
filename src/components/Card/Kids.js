import React from 'react';
import { Link } from 'react-scroll';
import './styles.css';

function CardKids() {
  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__picture card__picture--1'>&nbsp;</div>
        <h4 className='card__heading'>
          <span className='card__heading-span card__heading-span--1'>
            子供のレッスン
          </span>
        </h4>
        <div className='card__details'>
          <ul>
            <li>おうたを歌ったり</li>
            <li>リズムを叩いたり</li>
            <li>
              ピアノを演奏するうえで大切な基礎となるソルフェージュも取り入れてレッスンしています
            </li>
          </ul>
        </div>
      </div>
      <div className='card__side card__side--back card__side--back-1'>
        <div className='card__cta'>
          <div className='card__price-box'>
            <p className='card__price-only'>【入会金】・・・￥5000</p>
            <p className='card__price-only'>
              【幼児・小学生】
              <br />
              ♪ 初級(30分)・・・￥7200
              <br />♪ 中級-ブルグミュラー-(30分)・・・￥8400
            </p>
            <p className='card__price-only'>
              ♪ 上級-ソナチネ- (40分)・・・￥10500
            </p>
          </div>
          <Link to='#popup' className='btn btn--white'>
            体験レッスン
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardKids;
