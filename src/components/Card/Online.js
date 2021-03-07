import React from 'react';
import { Link } from 'react-scroll';
import './styles.css';

function CardOnline() {
  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__picture card__picture--4'>&nbsp;</div>
        <h4 className='card__heading'></h4>
        <div className='card__details'>
          <ul>
            <li>
              体調が本調子ではなく、レッスンにお越しになるのが難しい。遠方で通うのが大変
            </li>
            <li>
              様々な理由でオンラインレッスンをご希望の方は、是非いつでも安心・安全なオンラインレッスンを承ります
            </li>
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
          </div>
          <Link to='popup' className='btn btn--white'>
            体験レッスン
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardOnline;
