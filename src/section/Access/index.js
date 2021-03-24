import React from 'react';
import CardAccess from '../../components/Card/Access';
import HorizontalScrollButtons from '../../components/HorizpntalScrollButtons';
import Popup from './popup';
import './styles.css';

function Access() {
  return (
    <section className='section-tours'>
        <h2 className='heading-secondary' id='access'>
          アクセス
        </h2>

      <CardAccess />
      <Popup />
      <HorizontalScrollButtons/>
    </section>
  );
}

export default Access;
