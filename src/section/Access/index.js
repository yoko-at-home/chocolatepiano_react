import React from 'react';
import './styles.css';

function Access() {
  return (
    <section className='section-tours' id='section-lesson'>
      <div className='u-center-text '>
        <h2 className='heading-secondary' style='font-size:4rem'>
          アクセス
        </h2>
      </div>

      <div className='row'>
        <div className='col-1-of-3'>&nbsp;</div>
        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__picture card__picture--3'>&nbsp;</div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--3'>
                  アクセス
                </span>
              </h4>
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
                <Link to='#popup-access' className='btn btn--white'>
                  アクセス
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-1-of-3'>&nbsp;</div>
      </div>
    </section>
  );
}

export default Access;
