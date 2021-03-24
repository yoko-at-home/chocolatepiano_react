import React from 'react';
import './styles.css';

function CardAdult() {
  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__picture card__picture--2'>&nbsp;</div>
        <div className='card__details'>
          <ul>
            <li>一緒にピアノで音楽を楽しみましょう♪♪♪</li>
            <li>お好きな曲が弾けるようになると楽しいですよ♪</li>
            <li>ピアノ・音楽は生涯楽しめるものです。</li>
            <li>
              家事の合間・お買い物ついで、すきま時間・午前中・休日などにピアノを習ってみませんか！？
            </li>
          </ul>
        </div>
      </div>
      <div className='card__side card__side--back card__side--back-2'>
        <div className='card__cta'>
          <div className='card__price-box'>
            <p className='card__price-only'>【中学生 〜 一般の方】</p>
            <p className='card__price-only'>
              ♪ 初級・中級 (30分) ・・・￥8400
              <br />♪ 中級-ブルグミュラー-(30分)・・・￥8400
            </p>
            <p className='card__price-only'>
              ♪ 上級-ソナチネ- (40分)・・・￥10500
            </p>
            <p className='card__price-only'>
              【月２回コース】(大人の方のみ)
              <br />
              ♪お月謝（30分）・・・￥5000
            </p>
            <p className='card__price-only'>
              【１レッスン制 】 （火・水・土）
              <br />
              ♪1レッスン(30分)・・・￥3000 <br />
              ☆入会金は必要ございません
            </p>
          </div>
          <a href='#contact-popup' className='btn btn--white'>
            体験レッスン
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardAdult;
