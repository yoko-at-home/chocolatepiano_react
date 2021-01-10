import React from 'react'
import {Link} from 'react-router-dom'
import './HorizontalScrollButton.styles.css'

function HorizontalScrollButtons() {
  return (
    <div className='horizontal_nav'>
      <ul className='horizontal-list'>
        <li>
          <Link to='/#' className='btn btn--pink btn--animated'>
            ホームへ
          </Link>
        </li>
        <li>
          <Link to='/#section-profile' className='btn btn--pink btn--animated'>
            ご挨拶
          </Link>
        </li>
        <li>
          <Link to='/#kid' className='btn btn--pink btn--animated'>
            子供のレッスン
          </Link>
        </li>
        <li>
          <Link to='/#adult' className='btn btn--pink btn--animated'>
            大人のレッスン
          </Link>
        </li>
        <li>
          <Link to='/#online' className='btn btn--pink btn--animated'>
            オンラインレッスン
          </Link>
        </li>
        <li>
          <Link to='/#event' className='btn btn--pink btn--animated'>
            年間行事・イベント
          </Link>
        </li>
        <li>
          <Link to='/#activity' className='btn btn--pink btn--animated'>
            講師演奏活動
          </Link>
        </li>
        <li>
          <Link to='/#inof' className='btn btn--pink btn--animated'>
            お知らせ
          </Link>
        </li>
        <li>
          <Link to='/#popup-access' className='btn btn--pink btn--animated'>
            アクセス
          </Link>
        </li>
        <li>
          <Link to='#book-now' className='btn btn--pink btn--animated'>
            お問い合わせ
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HorizontalScrollButtons
