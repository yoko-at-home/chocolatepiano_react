import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default class InfoSection extends Component {
  render() {
    return (
      <section className='section-tweet' id='info'>
          <h2 className='heading-secondary' style={{ fontSize: '4rem' }}>
            ショコラピアノ教室からのお知らせ
          </h2>
          <FacebookProvider appId='2924955427824996'>
            <Page
              href='https://www.facebook.com/chocolatpianoa'
              tabs='timeline'
              width='330px'
            />
            </FacebookProvider>
          <blockquote
            cite='https://www.facebook.com/chocolatpianoa/'
            className='fb-xfbml-parse-ignore'
            >
            <a href='https://www.facebook.com/chocolatpianoa/'>
              相模原市ピアノ教室 ショコラピアノ教室 とりごえあや
            </a>
          </blockquote>
      </section>
    );
  }
}
