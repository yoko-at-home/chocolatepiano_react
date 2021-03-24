import React from 'react';
import './styles.css';

function CardAccess() {
  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__picture card__picture--3'>&nbsp;</div>
        <div className='card__details'>
          <ul>
                  <li>JR横浜線 古淵駅より徒歩10分</li>
                  <li>トーヨーカドー・AEONのすぐ近く</li>
                  <li>駐車場ございます。</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-3'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>
                    お問い合わせいただいたときの空き状況により、ご相談してレッスン日時を決めていきます。
                    <br />
                    &nbsp;
                  </p>
                  <p className='card__price-only'>
                    <b>
                      ☆大人の男性の方はご遠慮いただいております。大変申し訳ございませんが、ご了承下さいませ。
                    </b>
                  </p>
                </div>
                <a href='#popup-access' className='btn btn--white'>
                  アクセス
                </a>
        </div>
      </div>
    </div>
  );
}

export default CardAccess;
