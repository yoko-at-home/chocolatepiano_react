import React from 'react';
import { Link } from 'react-scroll';
import './styles.css';

function HorizontalScrollButtons() {
  return (
    <div className='horizontal_nav'>
      <ul className='horizontal-list'>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='top'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            ホームへ
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='section-profile'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            ご挨拶
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='kid'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            子供のレッスン
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='adult'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            大人のレッスン
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='online'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            オンラインレッスン
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='faq'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            よくあるご質問
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='event'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            イベント
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='activity'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            講師演奏活動
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='info'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            お知らせ
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='access'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            アクセス
          </Link>
        </li>
        <li>
          <Link
            className='btn btn--pink btn--animated'
            activeClass='active'
            to='book-now'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            お問い合わせ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HorizontalScrollButtons;
