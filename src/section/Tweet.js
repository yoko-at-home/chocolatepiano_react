import React from 'react'

function TweetSection () {
  const URL = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v9.0'
  const FacebookURL = 'https://www.facebook.com/chocolatpianoa'
  return (
    <section className="section-tweet" id="tweet">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary" style="font-size:4rem">
             ショコラピアノ教室からのお知らせ
                    </h2>
          <div id="fb-root"></div>
           <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v9.0" nonce="Pl0S9CSN"></script>
           <div className="fb-page" data-href="https://www.facebook.com/chocolatpianoa/" data-tabs="timeline" data-width="300" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/chocolatpianoa/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/chocolatpianoa/">相模原市ピアノ教室 ショコラピアノ教室 とりごえあや</a></blockquote></div>
         </div>
        </section>
  )
}

export default TweetSection;
