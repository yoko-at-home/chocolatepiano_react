import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: 'FAQ (How it works)',
  rows: [
    {
      title: 'Lorem ipsum dolor sit amet,',
      content: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Nunc maximus, magna at ultricies elementum',
      content:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      content:
        'Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc',
    },
    {
      title: 'What is the package version',
      content: 'v1.0.5',
    },
  ],
};

export default class FAQ extends Component {
  render() {
    return (
      <section className='section-tweet' id='faq'>
        <h2 className='heading-secondary' style={{ fontSize: '4rem' }}>
          よくあるご質問
        </h2>
        <div style={{ width: '80%', margin: '0 auto 8rem' }}>
          <Faq data={data} />
        </div>
      </section>
    );
  }
}
